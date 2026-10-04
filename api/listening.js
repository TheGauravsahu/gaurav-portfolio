const playlistId = "PLId8YsVEnssA";
const feedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
const cacheDuration = 6 * 60 * 60 * 1000;

let memoryCache;

function decodeXml(value) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([a-f\d]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'");
}

function readTag(xml, tag) {
  const escapedTag = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = xml.match(new RegExp(`<${escapedTag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escapedTag}>`, "i"));
  return match ? decodeXml(match[1].trim()) : "";
}

export function parsePlaylistFeed(xml) {
  const entries = [...xml.matchAll(/<entry(?:\s[^>]*)?>([\s\S]*?)<\/entry>/gi)];
  const videos = entries.slice(0, 12).map(([, entry]) => {
    const id = readTag(entry, "yt:videoId") ||
      readTag(entry, "id").match(/yt:video:([a-zA-Z0-9_-]+)/)?.[1];
    const title = readTag(entry, "title");
    if (!id || !title) return null;

    return {
      id,
      title,
      publishedAt: readTag(entry, "published"),
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    };
  }).filter(Boolean);

  if (videos.length === 0) {
    throw new Error("The playlist feed contains no public videos.");
  }

  return {
    playlistId,
    title: readTag(xml, "title") || "Gaurav’s YouTube playlist",
    videos,
    fetchedAt: new Date().toISOString(),
  };
}

function setCacheHeaders(response, maxAge) {
  response.setHeader("Cache-Control", `public, max-age=3600, s-maxage=${maxAge}, stale-while-revalidate=86400`);
  response.setHeader("CDN-Cache-Control", `public, s-maxage=${maxAge}, stale-while-revalidate=86400`);
  response.setHeader("Vercel-CDN-Cache-Control", `public, s-maxage=${maxAge}, stale-while-revalidate=86400`);
}

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Only GET requests are supported." });
  }

  if (memoryCache && Date.now() - memoryCache.cachedAt < cacheDuration) {
    setCacheHeaders(response, Math.ceil((cacheDuration - (Date.now() - memoryCache.cachedAt)) / 1000));
    return response.status(200).json(memoryCache.data);
  }

  try {
    const feedResponse = await fetch(feedUrl, {
      headers: { Accept: "application/atom+xml, application/xml;q=0.9, */*;q=0.8" },
      signal: AbortSignal.timeout(8000),
    });

    if (!feedResponse.ok) {
      if (memoryCache) {
        setCacheHeaders(response, 300);
        return response.status(200).json({
          ...memoryCache.data,
          warning: "Showing the saved playlist; YouTube could not refresh it just now.",
        });
      }
      response.setHeader("Cache-Control", "no-store");
      return response.status(502).json({
        error: feedResponse.status === 404
          ? "YouTube could not find a public playlist feed. Check the playlist link and make sure it is public."
          : "YouTube could not be reached. Please try again later.",
      });
    }

    const data = parsePlaylistFeed(await feedResponse.text());
    memoryCache = { data, cachedAt: Date.now() };
    setCacheHeaders(response, 21600);
    return response.status(200).json(data);
  } catch (error) {
    if (memoryCache) {
      setCacheHeaders(response, 300);
      return response.status(200).json({
        ...memoryCache.data,
        warning: "Showing the saved playlist; YouTube could not refresh it just now.",
      });
    }

    console.error("YouTube playlist feed request failed.", error);
    response.setHeader("Cache-Control", "no-store");
    return response.status(502).json({
      error: error.name === "TimeoutError"
        ? "The playlist took too long to respond. Please try again later."
        : "Could not load playlist tracks. Check the playlist link and make sure it is public.",
    });
  }
}

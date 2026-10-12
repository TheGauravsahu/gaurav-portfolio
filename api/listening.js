const defaultPlaylistId = "PLId8YsVEnssA";
const cacheDuration = 6 * 60 * 60 * 1000;

// Memory cache keyed by playlist ID
const memoryCache = new Map();

const fallbackTracks = [
  { id: "O85BuzwAAzY", title: "Surma", thumbnail: "https://i.ytimg.com/vi/O85BuzwAAzY/hqdefault.jpg" },
  { id: "UPRKxMZZPK0", title: "Little Bhatia - Ghoomar | Prod. AN1K8T | SHE/HER EP | (Official Music Video) - 2025", thumbnail: "https://i.ytimg.com/vi/UPRKxMZZPK0/hqdefault.jpg" },
  { id: "rC-kbRanJQ0", title: "UDI UDI | @Aneesh.Poojari & @sarkarmusic.25 | The Collective Tape | Official Music Video", thumbnail: "https://i.ytimg.com/vi/rC-kbRanJQ0/hqdefault.jpg" },
  { id: "a73KeYx1LiI", title: "Andaz E Karam | Raj Ratan Flip | Nusret Fateh Ali Khan | HAVI", thumbnail: "https://i.ytimg.com/vi/a73KeYx1LiI/hqdefault.jpg" },
  { id: "DXxpNjYrfJU", title: "Danny Zee - So Long, Goodbye (Official Audio)", thumbnail: "https://i.ytimg.com/vi/DXxpNjYrfJU/hqdefault.jpg" },
  { id: "gbgpsbvdPSo", title: "Pariye Payan", thumbnail: "https://i.ytimg.com/vi/gbgpsbvdPSo/hqdefault.jpg" },
  { id: "6vg4Cggyqr8", title: "Raanjhan Mora - AFTERAll & Shreya Jain | Official Visualiser", thumbnail: "https://i.ytimg.com/vi/6vg4Cggyqr8/hqdefault.jpg" },
  { id: "2VNUaBQlmnY", title: "Gujariya | Ben Parag | Official Music Video |", thumbnail: "https://i.ytimg.com/vi/2VNUaBQlmnY/hqdefault.jpg" },
  { id: "0CYlxz0YpZ8", title: "BANNI | @Aneesh.Poojari | Ft @krtinkay & Gargei | Prod @prodbykunnu | Kanchan | Official Music Video", thumbnail: "https://i.ytimg.com/vi/0CYlxz0YpZ8/hqdefault.jpg" },
  { id: "OD7d1e1mwyQ", title: "Swastik The Band || Jogi || Official video", thumbnail: "https://i.ytimg.com/vi/OD7d1e1mwyQ/hqdefault.jpg" },
];

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

export function parsePlaylistFeed(xml, playlistId = defaultPlaylistId) {
  const entries = [...xml.matchAll(/<entry(?:\s[^>]*)?>([\s\S]*?)<\/entry>/gi)];
  const videos = entries.slice(0, 20).map(([, entry]) => {
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
    title: readTag(xml, "title") || "favs",
    videos,
    fetchedAt: new Date().toISOString(),
  };
}

function findVideosInObject(obj, results = [], seen = new Set()) {
  if (!obj || typeof obj !== "object") return results;

  if (obj.playlistVideoRenderer) {
    const v = obj.playlistVideoRenderer;
    const id = v.videoId;
    const title = v.title?.runs?.[0]?.text || v.title?.simpleText;
    if (id && title && !seen.has(id)) {
      seen.add(id);
      results.push({
        id,
        title,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      });
    }
  } else if (obj.lockupViewModel) {
    const v = obj.lockupViewModel;
    const id =
      v.contentImage?.thumbnailViewModel?.image?.sources?.[0]?.url?.match(/\/vi\/([^/?]+)/)?.[1] ||
      v.rendererContext?.commandContext?.onTap?.innertubeCommand?.watchEndpoint?.videoId;
    const title = v.metadata?.lockupMetadataViewModel?.title?.content;
    if (id && title && !seen.has(id)) {
      seen.add(id);
      results.push({
        id,
        title,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      });
    }
  }

  for (const key of Object.keys(obj)) {
    if (results.length >= 25) break;
    findVideosInObject(obj[key], results, seen);
  }
  return results;
}

export function parsePlaylistHtml(html, playlistId = defaultPlaylistId) {
  let title = "favs";
  let videos = [];

  const marker = "var ytInitialData = ";
  const start = html.indexOf(marker);
  if (start !== -1) {
    const end = html.indexOf(";</script>", start);
    if (end !== -1) {
      try {
        const data = JSON.parse(html.substring(start + marker.length, end));
        title = data.metadata?.playlistMetadataRenderer?.title ||
          data.header?.playlistHeaderRenderer?.title?.simpleText ||
          data.microformat?.microformatDataRenderer?.title ||
          title;

        videos = findVideosInObject(data.contents);
      } catch (err) {
        console.warn("Could not parse ytInitialData from YouTube playlist page:", err);
      }
    }
  }

  if (videos.length === 0) {
    const titleMatch = html.match(/<title>([^<]+?)(?:\s*-\s*YouTube)?<\/title>/i);
    if (titleMatch && titleMatch[1]) {
      title = titleMatch[1].replace(/ - YouTube$/, "").trim();
    }
  }

  if (videos.length === 0) {
    throw new Error("No public videos could be extracted from playlist page.");
  }

  return {
    playlistId,
    title,
    videos,
    fetchedAt: new Date().toISOString(),
  };
}

async function fetchPlaylist(playlistId) {
  // Strategy 1: Attempt official XML RSS feed
  try {
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
    const feedResponse = await fetch(feedUrl, {
      headers: { Accept: "application/atom+xml, application/xml;q=0.9, */*;q=0.8" },
      signal: AbortSignal.timeout(5000),
    });

    if (feedResponse.ok) {
      const xml = await feedResponse.text();
      return parsePlaylistFeed(xml, playlistId);
    }
  } catch {
    // RSS feeds are unstable or return 404 for certain playlist types; fallback to web page
  }

  // Strategy 2: Fetch public YouTube playlist web page
  const webUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
  const webResponse = await fetch(webUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    signal: AbortSignal.timeout(8000),
  });

  if (webResponse.ok) {
    const html = await webResponse.text();
    return parsePlaylistHtml(html, playlistId);
  }

  throw new Error(`Failed to fetch YouTube playlist (HTTP ${webResponse.status})`);
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

  let playlistId = defaultPlaylistId;
  try {
    const parsedUrl = new URL(request.url || "/", "http://localhost");
    const requestedId = parsedUrl.searchParams.get("list") || parsedUrl.searchParams.get("playlist_id");
    if (requestedId) {
      playlistId = requestedId;
    }
  } catch {
    // Use default playlist ID
  }

  const cached = memoryCache.get(playlistId);
  if (cached && Date.now() - cached.cachedAt < cacheDuration) {
    setCacheHeaders(response, Math.ceil((cacheDuration - (Date.now() - cached.cachedAt)) / 1000));
    return response.status(200).json(cached.data);
  }

  try {
    const data = await fetchPlaylist(playlistId);
    memoryCache.set(playlistId, { data, cachedAt: Date.now() });
    setCacheHeaders(response, 21600);
    return response.status(200).json(data);
  } catch (error) {
    if (cached) {
      setCacheHeaders(response, 300);
      return response.status(200).json({
        ...cached.data,
        warning: "Showing the saved playlist; YouTube could not refresh it just now.",
      });
    }

    if (playlistId === defaultPlaylistId) {
      setCacheHeaders(response, 300);
      return response.status(200).json({
        playlistId: defaultPlaylistId,
        title: "favs",
        videos: fallbackTracks,
        fetchedAt: new Date().toISOString(),
        warning: "Showing the saved playlist; YouTube could not refresh it just now.",
      });
    }

    console.error("YouTube playlist request failed:", error);
    response.setHeader("Cache-Control", "no-store");
    return response.status(502).json({
      error: "YouTube could not find a public playlist feed. Check the playlist link and make sure it is public.",
    });
  }
}

# Gaurav Sahu — Personal Website

A personal website built with React and Vite. It includes Home, About, Interests,
Photos, and Listening pages, with smooth scrolling, animated navigation, and a
persistent light/dark theme.

## Development

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Listening playlist

The Listening page uses YouTube's public playlist Atom feed; it does not need a
YouTube API key. Keep the playlist public for its track list to load. Successful
responses are cached in the browser for six hours and at the Vercel CDN for six
hours, with stale content available while the feed refreshes.

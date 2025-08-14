# Presentation Guide — Daily Quote Generator (Developed by Ak Kk)

## Elevator pitch (15–20 seconds)
"This is a lightweight Daily Quote Generator built with React and plain CSS. It shows random quotes from a local file, supports light/dark themes, and has copy-to-clipboard functionality. It's offline-friendly and easy to present or extend."

## Files & structure (what to show)
- public/
  - index.html — basic HTML template
- src/
  - index.js — React bootstrap (createRoot)
  - App.js — main app UI and logic
  - index.css, App.css — styles
  - quotes.json — local quotes
- package.json — scripts and dependencies

## Live demo script (30–60 seconds)
1. Open the app -> show landing UI (title + quote card).
2. Click **New Quote** multiple times to show randomness.
3. Toggle **Dark/Light** theme to demonstrate styling changes.
4. Click **Copy Quote** to show that the quote is copied to clipboard.
5. Mention that all quotes are local and the app requires no internet.

## Walkthrough — key code points (talk through these)
- **Importing quotes**: `import quotesData from './quotes.json'` — loads local JSON.
- **Random quote**: pick a random index and set state.
- **Theme toggle**: stored in `localStorage` so choice persists across reloads.
- **Copy**: uses `navigator.clipboard.writeText` with a fallback for older browsers.

## Why this is a good beginner project
- Teaches component structure, state, event handling, and styling.
- Easy to extend: add categories, favorites, or API-fetch later.
- Fully local — ideal for presentations without relying on external services.

## Suggested slide order (5 slides)
1. Title + author (you) + one-sentence goal.
2. Live demo (screenshot or open the app).
3. Architecture (file tree).
4. Key code snippets (random selection + theme).
5. Next steps & Q&A.

## Potential Q&A
- Q: "How do you persist theme?" — A: via localStorage, shown in App.js.
- Q: "How to add more quotes?" — A: edit `src/quotes.json`.
- Q: "Can this fetch remote quotes?" — A: yes, replace local import with fetch to an API.

Good luck with your presentation! — Ak Kk

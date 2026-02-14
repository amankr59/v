# A Special Valentine Surprise 💖

A mobile-first, responsive Valentine's Day web app with romantic messages, floating hearts, and optional background music.

## Deploy

- **GitHub Pages**: Push this repo, then in repo **Settings → Pages** choose source "Deploy from a branch" and select `main` (or your branch) and `/ (root)`.
- **Netlify**: Drag this folder into [Netlify Drop](https://app.netlify.com/drop) or connect the repo for automatic deploys.

## Background music (optional)

Add your own romantic audio file so the play/pause button works:

1. Create an `audio` folder in the project root.
2. Add a file named `romantic.mp3` (or `romantic.ogg`) inside `audio/`.
3. The app will use it automatically. If no file is present, the button still appears but music won't play.

## Files

- `index.html` – Structure, heading, button, message area, audio element
- `styles.css` – Mobile-first styles, theme, animations
- `script.js` – Messages, button logic, floating hearts, music toggle

No backend required. Open `index.html` in a browser to run locally.

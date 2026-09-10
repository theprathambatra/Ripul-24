# Ripul 24 | The After Hours Edition

A birthday experience for Ripul with a midnight countdown, an interactive Three.js chocolate and gold cake, metallic balloons, a photo archive, GSAP motion, a personal letter and a locally hosted Happy Birthday arrangement.

## Birthday

The main page unlocks at **11 September 2026, 00:00 Asia/Kolkata**. Append `?preview=1` to preview the celebration early. This is a presentation countdown using the visitor's clock, not a security boundary.

## Local development

Use Node.js 22 and pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile
pnpm exec vite --config vite.github.config.ts
```

## GitHub Pages

The included workflow builds and deploys the static React app on pushes to `main`. Set the repository's Settings > Pages > Source to GitHub Actions before its first run. The repository and Pages site have not been created by these files alone.

The workflow reads the Pages base path and adjusts photo, audio and script URLs for project repositories. For a local static build:

```sh
pnpm exec vite build --config vite.github.config.ts
```

Output: `github-dist/`.

## Audio and interactions

Play Happy Birthday using the jukebox, Make a wish, or Blow out candles. Music starts from a user action to respect browser playback rules. The included melody is an original synthesized piano and bell arrangement of Happy Birthday. Spotify is an optional external embed and its own playback restrictions apply.

Drag the cake or use arrow keys while focused to rotate. Cut eight slices, pop four balloons, open photos and the letter, and use the confetti buttons. Reduced motion preferences disable continuous decorative motion.

## Personal content

The photos and letter were supplied for this birthday project. Ripul is wearing yellow on his friend's back in the hero photo. His friend is in pink at the front. Review repository visibility before sharing this personal source collection.

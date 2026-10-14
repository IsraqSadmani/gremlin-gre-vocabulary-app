# Gremlin Vocab Trainer

Flashcards, synonym recall and synonym quizzes for all 439 words in
*Gremlin's Exclusive GRE Vocabulary – Complete Edition (Lists 1–15)*,
with every synonym listed in the book.

The same app comes in three forms:

| Form | Works on | How you get it |
|---|---|---|
| Web app (installable) | Android, Windows, Mac, Linux, iPhone | Open the GitHub Pages link, then "Install app" / "Add to Home screen" |
| Android app (`.apk`) | Android 5.1 and newer | Built automatically by GitHub (see below) |
| Desktop app | Windows (`.exe`), Mac (`.dmg`), Linux (`.AppImage`) | Built automatically by GitHub (see below) |

All three work fully offline. Progress is saved on each device.

## Getting the apps built (one-time setup, about 10 minutes)

1. Create a new **empty** repository on GitHub (for example `gremlin-vocab`).
2. Upload everything in this folder to it. The easiest way is the GitHub
   website: **Add file → Upload files**, drag in the whole folder contents,
   and commit to the `main` branch. Make sure the hidden `.github` folder
   is included. If drag-and-drop skips it, use GitHub Desktop or
   `git push` instead.
3. Open the repository's **Actions** tab. The "Build apps" workflow starts
   by itself. It takes roughly 5–10 minutes.
4. When it finishes, open the run and scroll to **Artifacts**:
   - `android-apk` → contains `Gremlin-Vocab.apk`
   - `desktop-windows-latest` → Windows installer and a portable `.exe`
   - `desktop-macos-latest` → Mac `.dmg`
   - `desktop-ubuntu-latest` → Linux `.AppImage`
5. The web app is published at
   `https://<your-username>.github.io/<repo-name>/`.
   If that job fails the first time, go to **Settings → Pages**, set
   **Source** to **GitHub Actions**, then re-run the workflow.

To get permanent download links (easier to open on a phone), create a tag
such as `v1.0.0` (**Releases → Draft a new release → Choose a tag → v1.0.0
→ Publish**). The workflow then attaches all the files to that release.

## Installing

- **Android APK:** download `Gremlin-Vocab.apk` on the phone and open it.
  Android will ask you to allow installs from that source (your browser or
  file manager). This is a normal step for apps that don't come from the
  Play Store.
- **Windows:** run `Gremlin-Vocab-Setup-1.0.0.exe`. Windows SmartScreen may
  warn because the app isn't code-signed: click **More info → Run anyway**.
  The portable `.exe` runs without installing.
- **Mac:** open the `.dmg` and drag the app to Applications. The first time,
  right-click the app and choose **Open**, because it isn't signed by Apple.
- **Linux:** make the `.AppImage` executable and run it.
- **Web app on Android:** open the Pages link in Chrome → menu → **Install
  app** (or **Add to Home screen**).
- **Web app on desktop:** open the link in Chrome or Edge → click the
  install icon in the address bar.

## Moving progress between devices

The standalone apps keep progress on the device. To move it, open
**Move progress to another device** at the bottom of the home screen, copy
the code, and paste it into the same box on the other device. Pasting merges
both, keeping the newest result for each word.

## Folder contents

- `www/` – the app itself (one HTML file with all the vocabulary data,
  offline cache, icons and fonts)
- `android/` – Android project (Capacitor)
- `electron/` – desktop wrapper (Electron)
- `.github/workflows/build.yml` – the automatic build

## Building on your own computer (optional)

Needs Node.js 20. For Android you also need Android Studio (JDK 17).

```
npm ci
npm run desktop          # run the desktop app
npm run dist:win         # build the Windows installer into dist/
npx cap sync android     # then open the android/ folder in Android Studio
```

Fonts: Young Serif, Atkinson Hyperlegible and JetBrains Mono, all under the
SIL Open Font License (see `www/fonts`).

# Running the Yapper app (Development)

This document explains how to run the app locally (Expo / React Native) for development and testing.

## Prerequisites

- Node.js (16.x or newer)
- npm or yarn
- Expo CLI (optional global install): `npm install -g expo-cli` or use `npx expo`/`yarn expo`
- For mobile simulators/emulators:
  - iOS: Xcode (macOS)
  - Android: Android Studio + SDK + emulator
- (Optional) Expo Go on a physical device to run the managed app

## Quick start

1. Clone the repo and install dependencies

   git clone https://github.com/bmam6598-bot/yapper.git
   cd yapper
   npm install
   # or
   yarn install

2. Environment

- If the project expects environment variables, create a `.env` or `.env.local` based on any existing `.env.example`. If none exists, create `.env` and add keys used by the app (API endpoints, auth keys, etc.).

3. Run the app (Expo)

- Start Metro / Expo dev server:

  npm run start
  # or
  yarn start

- From the Expo CLI page that opens in your terminal or browser:
  - Press `i` to open the iOS simulator (macOS + Xcode).
  - Press `a` to open an Android emulator (Android Studio).
  - Press `w` to open a web build in your browser.
  - Scan the QR code with Expo Go on your phone to run on a physical device.

4. Common direct commands

- Start and clear cache:
  npm run start:clear
  # or
  yarn start:clear

- Run on Android emulator
  npm run android
  # or
  yarn android

- Run on iOS simulator (macOS)
  npm run ios
  # or
  yarn ios

- Run on web
  npm run web
  # or
  yarn web


## Recommended package.json scripts

If not already present in `package.json`, add the following scripts to make running the app easier:

"scripts": {
  "start": "expo start",
  "start:clear": "expo start -c",
  "android": "expo run:android",
  "ios": "expo run:ios",
  "web": "expo start --web",
  "test": "jest"
}

Note: `expo run:android` / `expo run:ios` are used by the `expo prebuild` / bare workflow. If your project is fully managed and uses `expo start` + Expo Go, use `expo start` and run on device/simulator via the Expo dev tools.

## Troubleshooting

- Metro bundler cache issues: `expo start -c`
- Port in use: change port with `EXPO_DEVTOOLS_PORT=19002 expo start` or kill the process using the port
- Android emulator not launching: ensure ANDROID_HOME / ANDROID_SDK_ROOT are set and the emulator is started in Android Studio
- iOS: run `sudo xcode-select --switch /Applications/Xcode.app` if Xcode CLI tools are not selected properly

## Building production apps

- For managed Expo builds, consider using EAS Build (https://docs.expo.dev/eas/)
- For older `expo build` workflows, see Expo docs

---

If you want, I can also:
- Add the scripts directly to package.json in this repo
- Create a `.env.example` file with the expected keys (tell me the keys or point me to files that reference process.env)
- Add a convenient Makefile or GitHub workflow to run the app in CI


# FamilyHome

1. Setup
2. Issue
3. Fix

## Setup
1.  If not done already, install globally Yarn
2.  Move to the project folder
3.  Run `yarn install` to install dependencies
4.  You can now use `react-native run-ios` or `react-native run-android` to test on the iOS simulator or Android Device

For more information, you can refer to the official [Getting Started guide](https://facebook.github.io/react-native/docs/getting-started.html)

## Issue
1. react-native run-android don't work: SOLVED: go to fix 1

## Fix
1. To fix android app: run this cmd in the folder **Android**
./gradlew clean && ./gradlew :app:bundleRelease

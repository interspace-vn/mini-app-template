
mkdir -p bundle
rm -rf bundle/android
mkdir bundle/android

# android
react-native bundle --platform android --dev false --entry-file index.js --bundle-output bundle/android/index.android.bundle --assets-dest bundle/android
cd bundle/
zip -r android.zip android
cd ..


mkdir -p bundle
rm -rf bundle/ios
mkdir bundle/ios


react-native bundle --platform ios --dev false --entry-file index.js --bundle-output bundle/ios/main.jsbundle --assets-dest bundle/ios
cd bundle/
zip -r ios.zip ios
cd ..




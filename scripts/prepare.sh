rm -rf yarn.lock
rm -rf package-lock.json
rm -rf node_modules/ 
rm -fr $TMPDIR/metro* 

watchman watch-del-all 
yarn install 


# clean dist
rm -rf dist

# create build file
npm run start
cp src/index.html dist/index.html

# create sw manifest file // --module src/app/app.module.ts
node_modules/ng-pwa-tools/bin/ngu-sw-manifest.js --out dist/ngsw.manifest.json

# copy service worker
cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

# run the server
cd dist
http-server -p 8080 -a localhost -c 0
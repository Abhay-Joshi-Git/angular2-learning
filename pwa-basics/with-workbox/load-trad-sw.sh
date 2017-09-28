# clean dist
rm -rf dist

# create build file
npm run start


cp src/index.html dist/index.html
cp src/service-worker.js dist/service-worker.js

cd dist
http-server -p 8080 -a localhost -c 0

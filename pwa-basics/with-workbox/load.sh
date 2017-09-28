# clean dist
rm -rf dist

# create build file
npm run start

# run the server
cd dist
http-server -p 8080 -a localhost -c 0
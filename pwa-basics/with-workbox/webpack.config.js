const path = require('path');
const workboxPlugin = require('workbox-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const DIST_DIR = 'dist';

module.exports = {
  "entry": {
    "main": [
      "./src/main.ts"
    ],
    "polyfills": [
      "./src/polyfills.ts"
    ]
  },
  "output": {
    "path": path.join(process.cwd(), "dist"),
    "filename": "[name].bundle.js",
    "chunkFilename": "[id].chunk.js"
  },
  // "entry": "./src/main.ts",
  // "output": {
  //   filename: 'main.bundle.js',
  //   path: path.resolve(__dirname, DIST_DIR),
  // },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [ 
    new CopyWebpackPlugin([{
      from: 'src/index.html'
    }]),
    /* Call the plugin. */
    new workboxPlugin({
      globDirectory: DIST_DIR,
      globPatterns: ['**\/*.{html,js,css}'],
      swDest: path.join(DIST_DIR, 'sw.js'),
    }),
  ]
}
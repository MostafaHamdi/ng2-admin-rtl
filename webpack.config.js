const path = require('path');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const rtlcss = require('rtlcss');
const postcssUrl = require('postcss-url');

const {
  NoEmitOnErrorsPlugin,
  LoaderOptionsPlugin
} = require('webpack');
const {
  GlobCopyWebpackPlugin,
  BaseHrefWebpackPlugin
} = require('@angular/cli/plugins/webpack');
const {
  CommonsChunkPlugin
} = require('webpack').optimize;
const {
  AotPlugin
} = require('@ngtools/webpack');

const nodeModules = path.join(process.cwd(), 'node_modules');
const entryPoints = ["inline", "polyfills", "sw-register", "scripts", "styles", "vendor", "main"];
const baseHref = "";
const deployUrl = "";




module.exports = {
  "devtool": "source-map",
  "resolve": {
    "extensions": [
      ".ts",
      ".js"
    ],
    "modules": [
      "./node_modules"
    ]
  },
  "resolveLoader": {
    "modules": [
      "./node_modules"
    ]
  },
  "entry": {
    "main": [
      "./src/main.ts"
    ],
    "polyfills": [
      "./src/polyfills.ts"
    ],
    "scripts": [
      "script-loader!./node_modules/jquery/dist/jquery.js",
      "script-loader!./node_modules/easy-pie-chart/dist/jquery.easypiechart.js",
      "script-loader!./node_modules/jquery-slimscroll/jquery.slimscroll.js",
      "script-loader!./node_modules/tether/dist/js/tether.js",
      "script-loader!./node_modules/bootstrap/dist/js/bootstrap.js"
    ],
    "styles": [
      "./node_modules/roboto-fontface/css/roboto/sass/roboto-fontface.scss",
      "./node_modules/normalize.css/normalize.css",
      "./node_modules/font-awesome/scss/font-awesome.scss",
      "./node_modules/ionicons/scss/ionicons.scss",
      "./node_modules/bootstrap/scss/bootstrap.scss",
      "./node_modules/leaflet/dist/leaflet.css",
      "./node_modules/chartist/dist/chartist.css",
      "./node_modules/fullcalendar/dist/fullcalendar.css",
      "./src/app/theme/theme.scss",
      "./src/styles.scss"
    ]
  },
  "output": {
    "path": path.join(process.cwd(), "dist"),
    "filename": "[name].bundle.js",
    "chunkFilename": "[id].chunk.js"
  },
  "module": {
    "rules": [{
        "enforce": "pre",
        "test": /\.js$/,
        "loader": "source-map-loader",
        "exclude": [
          /\/node_modules\//
        ]
      },
      {
        "test": /\.json$/,
        "loader": "json-loader"
      },
      {
        "test": /\.html$/,
        "loader": "raw-loader"
      },
      {
        "test": /\.(eot|svg)$/,
        "loader": "file-loader?name=[name].[hash:20].[ext]"
      },
      {
        "test": /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
        "loader": "url-loader?name=[name].[hash:20].[ext]&limit=10000"
      },
      {
        "exclude": [
          path.join(process.cwd(), "node_modules/roboto-fontface/css/roboto/sass/roboto-fontface.scss"),
          path.join(process.cwd(), "node_modules/normalize.css/normalize.css"),
          path.join(process.cwd(), "node_modules/font-awesome/scss/font-awesome.scss"),
          path.join(process.cwd(), "node_modules/ionicons/scss/ionicons.scss"),
          path.join(process.cwd(), "node_modules/bootstrap/scss/bootstrap.scss"),
          path.join(process.cwd(), "node_modules/leaflet/dist/leaflet.css"),
          path.join(process.cwd(), "node_modules/chartist/dist/chartist.css"),
          path.join(process.cwd(), "node_modules/fullcalendar/dist/fullcalendar.css"),
          path.join(process.cwd(), "src/app/theme/theme.scss"),
          path.join(process.cwd(), "src/styles.scss")
        ],
        "test": /\.css$/,
        "loaders": [
          "exports-loader?module.exports.toString()",
          "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
          "postcss-loader"
        ]
      },
      {
        "exclude": [
          path.join(process.cwd(), "node_modules/roboto-fontface/css/roboto/sass/roboto-fontface.scss"),
          path.join(process.cwd(), "node_modules/normalize.css/normalize.css"),
          path.join(process.cwd(), "node_modules/font-awesome/scss/font-awesome.scss"),
          path.join(process.cwd(), "node_modules/ionicons/scss/ionicons.scss"),
          path.join(process.cwd(), "node_modules/bootstrap/scss/bootstrap.scss"),
          path.join(process.cwd(), "node_modules/leaflet/dist/leaflet.css"),
          path.join(process.cwd(), "node_modules/chartist/dist/chartist.css"),
          path.join(process.cwd(), "node_modules/fullcalendar/dist/fullcalendar.css"),
          path.join(process.cwd(), "src/app/theme/theme.scss"),
          path.join(process.cwd(), "src/styles.scss")
        ],
        "test": /\.scss$|\.sass$/,
        "loaders": [
          "exports-loader?module.exports.toString()",
          "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        "exclude": [
          path.join(process.cwd(), "node_modules/roboto-fontface/css/roboto/sass/roboto-fontface.scss"),
          path.join(process.cwd(), "node_modules/normalize.css/normalize.css"),
          path.join(process.cwd(), "node_modules/font-awesome/scss/font-awesome.scss"),
          path.join(process.cwd(), "node_modules/ionicons/scss/ionicons.scss"),
          path.join(process.cwd(), "node_modules/bootstrap/scss/bootstrap.scss"),
          path.join(process.cwd(), "node_modules/leaflet/dist/leaflet.css"),
          path.join(process.cwd(), "node_modules/chartist/dist/chartist.css"),
          path.join(process.cwd(), "node_modules/fullcalendar/dist/fullcalendar.css"),
          path.join(process.cwd(), "src/app/theme/theme.scss"),
          path.join(process.cwd(), "src/styles.scss")
        ],
        "test": /\.less$/,
        "loaders": [
          "exports-loader?module.exports.toString()",
          "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        "exclude": [
          path.join(process.cwd(), "node_modules/roboto-fontface/css/roboto/sass/roboto-fontface.scss"),
          path.join(process.cwd(), "node_modules/normalize.css/normalize.css"),
          path.join(process.cwd(), "node_modules/font-awesome/scss/font-awesome.scss"),
          path.join(process.cwd(), "node_modules/ionicons/scss/ionicons.scss"),
          path.join(process.cwd(), "node_modules/bootstrap/scss/bootstrap.scss"),
          path.join(process.cwd(), "node_modules/leaflet/dist/leaflet.css"),
          path.join(process.cwd(), "node_modules/chartist/dist/chartist.css"),
          path.join(process.cwd(), "node_modules/fullcalendar/dist/fullcalendar.css"),
          path.join(process.cwd(), "src/app/theme/theme.scss"),
          path.join(process.cwd(), "src/styles.scss")
        ],
        "test": /\.styl$/,
        "loaders": [
          "exports-loader?module.exports.toString()",
          "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
          "postcss-loader",
          "stylus-loader?{\"sourceMap\":false,\"paths\":[]}"
        ]
      },
      {
        "include": [
          path.join(process.cwd(), "node_modules/roboto-fontface/css/roboto/sass/roboto-fontface.scss"),
          path.join(process.cwd(), "node_modules/normalize.css/normalize.css"),
          path.join(process.cwd(), "node_modules/font-awesome/scss/font-awesome.scss"),
          path.join(process.cwd(), "node_modules/ionicons/scss/ionicons.scss"),
          path.join(process.cwd(), "node_modules/bootstrap/scss/bootstrap.scss"),
          path.join(process.cwd(), "node_modules/leaflet/dist/leaflet.css"),
          path.join(process.cwd(), "node_modules/chartist/dist/chartist.css"),
          path.join(process.cwd(), "node_modules/fullcalendar/dist/fullcalendar.css"),
          path.join(process.cwd(), "src/app/theme/theme.scss"),
          path.join(process.cwd(), "src/styles.scss")
        ],
        "test": /\.css$/,
        "loaders": ExtractTextPlugin.extract({
          "use": [
            "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
            "postcss-loader"
          ],
          "fallback": "style-loader",
          "publicPath": ""
        })
      },
      {
        "include": [
          path.join(process.cwd(), "node_modules/roboto-fontface/css/roboto/sass/roboto-fontface.scss"),
          path.join(process.cwd(), "node_modules/normalize.css/normalize.css"),
          path.join(process.cwd(), "node_modules/font-awesome/scss/font-awesome.scss"),
          path.join(process.cwd(), "node_modules/ionicons/scss/ionicons.scss"),
          path.join(process.cwd(), "node_modules/bootstrap/scss/bootstrap.scss"),
          path.join(process.cwd(), "node_modules/leaflet/dist/leaflet.css"),
          path.join(process.cwd(), "node_modules/chartist/dist/chartist.css"),
          path.join(process.cwd(), "node_modules/fullcalendar/dist/fullcalendar.css"),
          path.join(process.cwd(), "src/app/theme/theme.scss"),
          path.join(process.cwd(), "src/styles.scss")
        ],
        "test": /\.scss$|\.sass$/,
        "loaders": ExtractTextPlugin.extract({
          "use": [
            "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
            "postcss-loader",
            "sass-loader"
          ],
          "fallback": "style-loader",
          "publicPath": ""
        })
      },
      {
        "include": [
          path.join(process.cwd(), "node_modules/roboto-fontface/css/roboto/sass/roboto-fontface.scss"),
          path.join(process.cwd(), "node_modules/normalize.css/normalize.css"),
          path.join(process.cwd(), "node_modules/font-awesome/scss/font-awesome.scss"),
          path.join(process.cwd(), "node_modules/ionicons/scss/ionicons.scss"),
          path.join(process.cwd(), "node_modules/bootstrap/scss/bootstrap.scss"),
          path.join(process.cwd(), "node_modules/leaflet/dist/leaflet.css"),
          path.join(process.cwd(), "node_modules/chartist/dist/chartist.css"),
          path.join(process.cwd(), "node_modules/fullcalendar/dist/fullcalendar.css"),
          path.join(process.cwd(), "src/app/theme/theme.scss"),
          path.join(process.cwd(), "src/styles.scss")
        ],
        "test": /\.less$/,
        "loaders": ExtractTextPlugin.extract({
          "use": [
            "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
            "postcss-loader",
            "less-loader"
          ],
          "fallback": "style-loader",
          "publicPath": ""
        })
      },
      {
        "include": [
          path.join(process.cwd(), "node_modules/roboto-fontface/css/roboto/sass/roboto-fontface.scss"),
          path.join(process.cwd(), "node_modules/normalize.css/normalize.css"),
          path.join(process.cwd(), "node_modules/font-awesome/scss/font-awesome.scss"),
          path.join(process.cwd(), "node_modules/ionicons/scss/ionicons.scss"),
          path.join(process.cwd(), "node_modules/bootstrap/scss/bootstrap.scss"),
          path.join(process.cwd(), "node_modules/leaflet/dist/leaflet.css"),
          path.join(process.cwd(), "node_modules/chartist/dist/chartist.css"),
          path.join(process.cwd(), "node_modules/fullcalendar/dist/fullcalendar.css"),
          path.join(process.cwd(), "src/app/theme/theme.scss"),
          path.join(process.cwd(), "src/styles.scss")
        ],
        "test": /\.styl$/,
        "loaders": ExtractTextPlugin.extract({
          "use": [
            "css-loader?{\"sourceMap\":false,\"importLoaders\":1}",
            "postcss-loader",
            "stylus-loader?{\"sourceMap\":false,\"paths\":[]}"
          ],
          "fallback": "style-loader",
          "publicPath": ""
        })
      },
      {
        "test": /\.ts$/,
        "loader": "@ngtools/webpack"
      }
    ]
  },
  "plugins": [
    new NoEmitOnErrorsPlugin(),
    new GlobCopyWebpackPlugin({
      "patterns": [
        "assets",
        "favicon.ico"
      ],
      "globOptions": {
        "cwd": "/home/mmd/Documents/Project/ng2-admin-rtl/src",
        "dot": true,
        "ignore": "**/.gitkeep"
      }
    }),
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      "template": "./src/index.html",
      "filename": "./index.html",
      "hash": false,
      "inject": true,
      "compile": true,
      "favicon": false,
      "minify": false,
      "cache": true,
      "showErrors": true,
      "chunks": "all",
      "excludeChunks": [],
      "title": "Webpack App",
      "xhtml": true,
      "chunksSortMode": function sort(left, right) {
        let leftIndex = entryPoints.indexOf(left.names[0]);
        let rightindex = entryPoints.indexOf(right.names[0]);
        if (leftIndex > rightindex) {
          return 1;
        } else if (leftIndex < rightindex) {
          return -1;
        } else {
          return 0;
        }
      }
    }),
    new BaseHrefWebpackPlugin({}),
    new CommonsChunkPlugin({
      "name": "inline",
      "minChunks": null
    }),
    new CommonsChunkPlugin({
      "name": "vendor",
      "minChunks": (module) => module.resource && module.resource.startsWith(nodeModules),
      "chunks": [
        "main"
      ]
    }),
    new ExtractTextPlugin({
      "filename": "[name].bundle.css",
      "disable": true
    }),
    new LoaderOptionsPlugin({
      "sourceMap": false,
      "options": {
        "postcss": [
          autoprefixer(),
          rtlcss(),
          postcssUrl({
            "url": (URL) => {
              // Only convert root relative URLs, which CSS-Loader won't process into require().
              if (!URL.startsWith('/') || URL.startsWith('//')) {
                return URL;
              }
              if (deployUrl.match(/:\/\//)) {
                // If deployUrl contains a scheme, ignore baseHref use deployUrl as is.
                return `${deployUrl.replace(/\/$/, '')}${URL}`;
              } else if (baseHref.match(/:\/\//)) {
                // If baseHref contains a scheme, include it as is.
                return baseHref.replace(/\/$/, '') +
                  `/${deployUrl}/${URL}`.replace(/\/\/+/g, '/');
              } else {
                // Join together base-href, deploy-url and the original URL.
                // Also dedupe multiple slashes into single ones.
                return `/${baseHref}/${deployUrl}/${URL}`.replace(/\/\/+/g, '/');
              }
            }
          })
        ],
        "sassLoader": {
          "sourceMap": false,
          "includePaths": []
        },
        "lessLoader": {
          "sourceMap": false
        },
        "context": ""
      }
    }),
    new AotPlugin({
      "mainPath": "main.ts",
      "hostReplacementPaths": {
        "environments/environment.ts": "environments/environment.ts"
      },
      "exclude": [],
      "tsConfigPath": "src/tsconfig.app.json",
      "skipCodeGeneration": true
    })
  ],
  "node": {
    "fs": "empty",
    "global": true,
    "crypto": "empty",
    "tls": "empty",
    "net": "empty",
    "process": true,
    "module": false,
    "clearImmediate": false,
    "setImmediate": false
  }
};

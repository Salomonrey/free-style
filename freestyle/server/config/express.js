const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const bodyParser = require("body-parser");
const compression = require("compression");

// import webpack from 'webpack'
// import webpackDevMiddleware from 'webpack-dev-middleware'
// import config from '../../webpack.config.js'

// const DIST_DIR = path.join(__dirname, "../../dist");
// const HTML_FILE = path.join(DIST_DIR, "index.html");
// const compiler = webpack(config)

const app = express();

require("./db-config");

const route = require("./routes");

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }))
// app.use(express.static(DIST_DIR));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  compression({
    threshold: 512
  })
);

app.use("/api", route);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers", "Content-type,Authorization");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/public", express.static("./public"));

// app.get('*', (req, res, next) => {
//   compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
//   if (err) {
//     return next(err)
//   }
//   res.set('content-type', 'text/html')
//   res.send(result)
//   res.end()
//   })
// })

// app.get('*', (req, res, next) => {
//   res.send(HTML_FILE)
// })

module.exports = app;

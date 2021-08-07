const FrontyGul = require("fronty-gul");
const project = new FrontyGul();


const src  = "./src/";
const dist = "./dist/";


const jsFiles   = ["script"];
const scssFiles = ["style"];
const templates = ["index"];

project.start({
  fileType: "js",
  files: jsFiles.map(file => src + "assets/js/" + file + ".js"),
  transpile: true,
  minify: true,
  debug: false,
  watch: true,
  destination: dist + "js/"
});

project.start({
  fileType: "scss",
  files: scssFiles.map(file => src + "assets/scss/" + file + ".scss"),
  minify: true,
  watch: true,
  destination: dist + "css/"
});

project.start({
  fileType: "pug",
  files: templates.map(file => src + "views/" + file + ".pug"),
  minify: true,
  watch: true,
  watchPath: src + "**/*.pug",
  destination: dist
});
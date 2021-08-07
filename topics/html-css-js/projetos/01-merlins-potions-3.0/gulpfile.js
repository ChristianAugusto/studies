const gulp        = require("gulp");
const sass        = require("gulp-sass");
const pug         = require("gulp-pug");
const uglify      = require("gulp-uglify");
const browserify  = require("browserify");
const babelify    = require("babelify");
const source      = require("vinyl-source-stream");
const buffer      = require("vinyl-buffer");
const size        = require("gulp-size");
const notify      = require("gulp-notify");
const browserSync = require("browser-sync").create();
const opn         = require("opn");


/* CONFIGS */
const src  = "src";
const dest = "dist";

const storeName = "merlins-potions";


/* FILES */

// JS
const commonJsFiles = ["common-globals"]
.map(file => `${src}/assets/js/common/${storeName}-${file}.js`);

const mobileJsFiles = ["home"]
.map(file => `${src}/assets/js/mobile/${storeName}-mobile-${file}.js`);

const jsFiles = commonJsFiles.concat(mobileJsFiles);


// SCSS
const commonScssFiles = ["common-globals"]
.map(file => `${src}/assets/scss/common/${storeName}-${file}.scss`);

const desktopScssFiles = ["home"]
.map(file => `${src}/assets/scss/desktop/${storeName}-desktop-${file}.scss`);

const mobileScssFiles = ["home"]
.map(file => `${src}/assets/scss/mobile/${storeName}-mobile-${file}.scss`);


const scssFiles = desktopScssFiles.concat(mobileScssFiles, commonScssFiles);


// PUG
const templates = ["home"]
.map(file => `${src}/views/${storeName}-${file}.pug`);




const sizesOptions = {
  pretty: true,
  showFiles: true,
  showTotal: true
};

gulp.task("build-scss", () => {

  const s = size(sizesOptions);

  return gulp.src(scssFiles)
    .pipe(sass({
      outputStyle: "compressed"
    }).on("error", function (error) {
      console.log(error);
    }))
    .pipe(s)
    .pipe(gulp.dest(`${dest}/css`))
    .pipe(notify({
      onLast: true,
      message: () => `SCSS files builded! Total size: ${s.prettySize}`
    }))
    .pipe(browserSync.stream());

});

gulp.task("build-html", () => {

  const s = size(sizesOptions);

  return gulp.src(templates)
    .pipe(pug({
      pretty: false
    }).on("error", function (error) {
      console.log(error);
    }))
    .pipe(s)
    .pipe(gulp.dest(dest))
    .pipe(notify({
      onLast: true,
      message: () => `PUG files builded! Total size: ${s.prettySize}`
    }))
    .pipe(browserSync.stream());

});

gulp.task("build-js", (done) => {
  const s = size(sizesOptions);

  let filesRemaining = jsFiles.length;

  jsFiles.forEach(file => {

    const newFileNameSplit = file.split("/");
    const newFileName = newFileNameSplit[newFileNameSplit.length - 1];

    return browserify(file)
      .transform(babelify)
      .bundle().on("error", function (error) {
        console.log(error);
      })
      .pipe(source(newFileName))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(`${dest}/js`))
      .pipe(s)
      .pipe(notify({
        message: () => {
          filesRemaining--;
          if (filesRemaining === 0) {
            done();
          }
          return `${newFileName} file builded! Total size: ${s.prettySize}`;
        }
      }))
      .pipe(browserSync.stream());

  });
});


gulp.task("watch-files", () => {

  browserSync.init({
    port: 3000,
    open: false,
    server: dest
  });

  opn("http://localhost:3000/merlins-potions-home.html");

  gulp.watch(templates, gulp.series("build-html"));
  gulp.watch(scssFiles, gulp.series("build-scss"));
  gulp.watch(jsFiles, gulp.series("build-js"));


  gulp.watch(`${dest}/**/*`).on("change", browserSync.reload);

});


gulp.task("copy-images", () => {

  const s = size(sizesOptions);

  return gulp.src("storage/*")
    .pipe(gulp.dest(`${dest}/storage`))
    .pipe(browserSync.stream());

});



gulp.task("build", gulp.series("build-scss", "build-html", "build-js", "copy-images"));
gulp.task("watch-development", gulp.series("build", "watch-files"));
const gulpzera = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function comprimeImagens() {
  return gulpzera
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulpzera.dest("./build/images"));
}

function comprimeJavaScript() {
  return gulpzera
    .src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulpzera.dest("./build/scripts"));
}

function compilaSass() {
  return gulpzera
    .src("./source/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulpzera.dest("./build/styles"));
}

exports.default = function () {
  gulpzera.watch(
    "./source/styles/*.scss",
    { ignoreInitial: false },
    gulpzera.series(compilaSass)
  );
  gulpzera.watch(
    "./source/scripts/*.js",
    { ignoreInitial: false },
    gulpzera.series(comprimeJavaScript)
  );
  gulpzera.watch(
    "./source/images/*",
    { ignoreInitial: false },
    gulpzera.series(comprimeImagens)
  );
};

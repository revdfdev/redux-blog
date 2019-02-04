"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("./client/src/sass/**/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./client/public/css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./client/src/sass/**/*.sass", ["sass"]);
});

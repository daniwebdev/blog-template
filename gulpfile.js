const gulp = require("gulp");
const fileinclude = require("gulp-file-include");


gulp.task("default", () => {
  return gulp
    .src(["src/*.html", "src/**/*.js"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./dist"));
});

gulp.watch("src/**/*.{html,js,css}", gulp.series("default"));
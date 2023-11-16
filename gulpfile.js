import gulp from "gulp";
import csso from "gulp-csso";
import include from "gulp-file-include";
// import htmlmin from "gulp-htmlmin";
// import pug from "gulp-pug";
// import sass from 'gulp-sass';
// import gulpSass from 'gulp-sass';
// const sass = gulpSass(scss);
// import gulpPug from "gulp-pug";
import autoprefixer from 'gulp-autoprefixer';
import concat from "gulp-concat";
// import del from "del";
// import sync from "browser-sync";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);


function html() {
  return gulp.src("src/**.html")
    .pipe(
      include({
        prefix: "@@",
      })
    )
    .pipe(gulp.dest("dist"));
}

function scss() {
  return gulp.src("src/scss/index.scss")
    .pipe(sass({
      outputStyle: "expanded",
    }))
    .pipe(
      autoprefixer({
        cascade: true,
        overrideBrowserslist: ["last 5 versions"],
      })
    )
    .pipe(csso())
    .pipe(concat("index.css"))
    .pipe(gulp.dest("dist"));
}

export{html, scss}

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const cssnext = require('postcss-cssnext');
const importcss = require('postcss-import');

gulp.task('styles', function(){
  var processors = [
    importcss("common.css"),
    cssnext({
      "browserslist": [
        "last 3 version",
        "ie 9"
      ]
    })
  ];
  if (process.env.NODE_ENV === 'production'){
    processors.push(cssnano())
  }
  return gulp.src('./public/css/**')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./public/dist/css'))
});

gulp.task('default',['styles']);
gulp.watch('./public/css/**', ['styles']);



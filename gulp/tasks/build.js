var gulp = require('gulp'),
del = require('del'),
browserSync = require('browser-sync').create();


gulp.task('del', function() {
  return del('./docs');
});

gulp.task('build', ['del'], function() {
  return gulp.src('./app/**/*')
    .pipe(gulp.dest('./docs'));
});

gulp.task('preview', function() {
  browserSync.init({
    notify: false,
    server:{
      baseDir: "docs"
    }
  });
});

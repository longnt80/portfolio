var gulp = require('gulp'),
del = require('del');


gulp.task('del', function() {
  return del('./docs');
});

gulp.task('build', ['del'], function() {
  return gulp.src('./app/**/*')
    .pipe(gulp.dest('./docs'));
});

var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssnested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([cssImport, mixins, cssnested, cssvars, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/temp/styles'));
});

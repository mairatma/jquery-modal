var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

require('metaljs')({
  bundleFileName: 'modal.js'
});

gulp.task('build', function(cb) {
  runSequence('build:globals', cb);
});

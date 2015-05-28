var gulp = require('gulp');
var runSequence = require('run-sequence');

require('metaljs')({
  bundleFileName: 'modal.js'
});

gulp.task('build', function(cb) {
  runSequence('build:globals', cb);
});

gulp.task('watch', function(cb) {
  runSequence('watch:globals', cb);
});

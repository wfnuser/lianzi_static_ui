var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
    browserSync({
        files: "**",
        server: {
            baseDir: "./admin"
        }
    });
});

gulp.task('default', ["browser-sync"]);
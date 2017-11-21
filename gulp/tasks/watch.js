var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        proxy: 'localhost:8000',
        startPath: '/score_watch'
    });

    watch('./application/views/welcome_message.php', function() {
        browserSync.reload();
    });

    watch('./assets/css/**/*.css', function() {
        gulp.start('cssInject');
    });

    watch('./assets/js/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });

    watch('./assets/js/**/*.vue', function() {
        gulp.start('vueComponent');
    });
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./assets/temp/css/styles.css')
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
});

gulp.task('vueComponent', ['scripts'], function() {
    browserSync.reload();
});
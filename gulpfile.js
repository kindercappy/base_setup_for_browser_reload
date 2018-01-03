var gulp        = 	require('gulp');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "127.0.0.1"
    },function(){
    	console.log("Hi");
    });
    browserSync.reload();
});
gulp.task('watch',function(){
	return gulp.watch('**/*.*',['browser-sync']);
});

gulp.task('rg',['watch','browser-sync']);
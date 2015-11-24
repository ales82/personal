
'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
 
gulp.task('html', function() {
    gulp.src('./app/**/*.html')
    .pipe(reload({stream:true}));
});

////////////////////////
//Compile cscc files  //
////////////////////////
gulp.task('sass', function () {
  gulp.src('./app/scss/**/*.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/css'))
    .pipe(reload({stream:true}));
});
 
/////////////////
//Browser-sync //
/////////////////
gulp.task('browser-sync', function(){
    browserSync({
        server : {
            baseDir : './app/'
        }
    });
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/scss/**/*.scss', ['sass']);
  gulp.watch('./app/**/*.html', ['html']);
});

gulp.task('default',['sass','html','browser-sync','sass:watch']);
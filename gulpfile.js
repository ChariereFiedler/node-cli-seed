'use strict';

const gulp = require('gulp');
const path = require('path');

const config = {
   buildDirectory: './dist',
   srcDirectory: './src'
};
require('./gulp_tasks/typescript')(gulp, config);

const configTest = {
   buildDirectory: './test',
   srcDirectory: './test'
};

require('./gulp_tasks/typescript')(gulp, configTest, "Test");


gulp.task('copy:templates', () => {
   return gulp.src(path.join(config.srcDirectory, '/**/*.hbs'))
       .pipe(gulp.dest(config.buildDirectory))
});

gulp.task('watch', ()=> {
   gulp.watch(path.join(config.srcDirectory, '/**/*.ts'), ['typescript', 'typescriptTest']);
   gulp.watch(path.join(config.srcDirectory, '/**/*.hbs'), ['copy:templates']);
});

gulp.task('build', ['typescript','typescriptTest', 'copy:templates']);

gulp.task('default', ['build', 'watch']);
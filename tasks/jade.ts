import * as gulp from 'gulp';
var rename = require('gulp-rename');
var jade = require('gulp-jade');

function pipelineFunction() {

    let jadeFiles = [
        '**/*.jade',
        '!node_modules/**/*',
        '!bower_components/**/*'
    ];

    return gulp
        .src(jadeFiles)
        .pipe(jade({ doctype: 'html', pretty: true }).on('error', console.log))
        .pipe(rename(filepath => filepath.extname = ".html"))
        .pipe(gulp.dest(''));
};

export default pipelineFunction;
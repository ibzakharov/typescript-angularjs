"use strict";
var gulp = require('gulp');
var rename = require('gulp-rename');
var jade = require('gulp-jade');
function pipelineFunction() {
    var jadeFiles = [
        '**/*.jade',
        '!node_modules/**/*',
        '!bower_components/**/*'
    ];
    return gulp
        .src(jadeFiles)
        .pipe(jade({ doctype: 'html', pretty: true }).on('error', console.log))
        .pipe(rename(function (filepath) {
        filepath.extname = ".html";
        console.log(filepath);
    }))
        .pipe(gulp.dest(''));
}
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pipelineFunction;
//# sourceMappingURL=jade.js.map
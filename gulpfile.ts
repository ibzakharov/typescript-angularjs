const gulp = require('gulp');

import jade from './tasks/jade';

namespace Jade {
    'use strict';

    export const name = 'jade';
    gulp.task(name, jade);
}

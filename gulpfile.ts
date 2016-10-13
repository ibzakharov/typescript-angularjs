const gulp = require('gulp');

import jade from './tasks/jade';

namespace Jade {
    'use strict';

    export const name = 'jade';
    gulp.task(name, jade);
}


namespace Default {
    'use strict';
    export const name = 'default';

    let jadeFiles = [
        '**/*.jade',
        '!node_modules/**/*',
        '!bower_components/**/*'
    ];

    gulp.task(name, () => {
        gulp.watch(jadeFiles, [Jade.name]);
    });
}

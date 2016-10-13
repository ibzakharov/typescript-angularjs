namespace Config {
    'use strict';
    export const applicationModule = angular.module($injections.appName, [
        'ngAnimate',
        'ngRoute',
        'ngSanitize',
        'LocalStorageModule',
        'ui.router',
        'kendo.directives',
        'breeze.angular',
        'pascalprecht.translate',
        'ngMessages',
        'ngCookies',
        'ngMaterial'
    ]);
}
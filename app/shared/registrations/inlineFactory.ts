namespace Registration {
    'use strict';

    export function inlineFactory(target: Function, selector?: selector): any[] {
        return [
            $injections.angular.$injector,
            (injector: angular.auto.IInjectorService) => {
                const instance = injector.instantiate(target);
                return selector !== undefined ? selector(instance).bind(instance) : instance;
            }
        ];
    }
}
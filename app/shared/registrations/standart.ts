namespace Registration {
    'use strict';

    export function controller(key: string): ClassDecorator {
        return (target): void => {
            const module = Config.applicationModule;
            module.controller(key, target);
        };
    }

    export function service(key: string): ClassDecorator {
        return (target): void => {
            const module = Config.applicationModule;
            module.service(key, target);
        };
    }

    export function factory(key: string, selector?: selector): ClassDecorator {
        return (target): void => {
            const module = Config.applicationModule;
            module.factory(key, inlineFactory(target, selector));
        };
    }

    export function provider(key: string): ClassDecorator {
        return (target): void => {
            const module = Config.applicationModule;
            module.provider(key, target);
        };
    }

    export function directive(key: string): ClassDecorator {
        return (target): void => {
            const module = Config.applicationModule;
            module.directive(key, inlineFactory(target));
        };
    }

    export function filter(key: string, selector: selector): ClassDecorator {
        return (target): void => {
            const module = Config.applicationModule;
            module.filter(key, inlineFactory(target, selector));
        };
    }

    export function config(target): void {
        const module = Config.applicationModule;
        module.config(inlineFactory(target));
    }

    export function run(target): void {
        const module = Config.applicationModule;
        module.run(inlineFactory(target));
    }
}
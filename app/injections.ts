namespace $injections {
    'use strict';

    export const appName: string = 'app';
    export const environmentConfig: string = 'environment-config';
    export const logo: string = 'logo-path';

    export namespace material {
        export const $mdToast: string = '$mdToast';
        export const $mdDialog: string = '$mdDialog';
        export const $mdSidenav: string = '$mdSidenav';
        export const $mdMedia: string = '$mdMedia';
    }

    export namespace Services {
        export const selectedBudgetIdProvider: string = 'selectedBudgetIdProvider';
        export const unassignedBillsUpdateBudgetPeriod: string = 'unassignedBillsUpdateBudgetPeriod';
        export const budgetAttachToActiveProjects: string = 'budgetAttachToActiveProjects';
        export const deleteProjectFromGrid: string = 'deleteProjectFromGrid';
        export const budgetProjectInitializer: string = 'budgetProjectInitializer';
        export const deleteBudgetFromGrid: string = 'deleteBudgetFromGrid';
        export const budgetPeriodFiller: string = 'budgetPeriodFiller';
        export const budgetPeriodCreator: string = 'budgetPeriodCreator';
        export const dialogConfirm: string = 'dialogConfirm';
        export const downloadDocument: string = 'downloadDocument';
        export const selectedDateProvider: string = 'selectedDateProvider';
        export const weekHoursProvider: string = 'weekHoursProvider';
        export const dateParameter: string = 'dateParameter';
        export const adjustWorkDateProperty: string = 'adjustWorkDateProperty';
        export const kendoDataItemFromEvent: string = 'kendoDataItemFromEvent';
        export const deleteEntityFromGrid: string = 'deleteEntityFromGrid';
        export const filterableSettings: string = 'filterableSettings';
        export const httpErrorDescriptor: string = 'httpErrorDescriptor';
        export const loginErrorDescriptor: string = 'loginErrorDescriptor';
        export const nowProvider: string = 'nowProvider';
        export const copyWorkItem: string = 'copyWorkItem';
        export const idParameterProvider: string = 'idParameterProvider';
        export const userDetailsHasChanges: string = 'userDetailsHasChanges';
        export const title: string = 'titleService';
        export const userDetails: string = 'userDetailsProvider';
        export const navigation: string = 'navigation';
        export const urls: string = 'urls';
        export const logger: string = 'logger';
        export const toast: string = 'toastService';
        export const dateTime: string = 'dateTimeService';
        export const requestKendoWidgetRefresh: string = 'requestKendoGridRefresh';
        export const detectFeatureUtils: string = 'detectFeatureUtils';
    }

    export namespace Filters {
        export const shortDateFormat: string = 'shortDateFormat';
        export const shortDateParser: string = 'shortDateParser';
        export const dateAsMilliseconds: string = 'dateAsMilliseconds';
        export const localTime: string = 'localTime';
        export const hasNativeSupportForInputValues: string = 'hasNativeSupportForInputValues';
    }

    export namespace Breeze {
        export const financeBudgetRepository: string = 'financeBudgetRepository';
        export const budgetProjectRepository: string = 'budgetProjectRepository';
        export const budgetPeriodRepository: string = 'budgetPeriodRepository';
        export const billRepository: string = 'billRepository';
        export const budgetRepository: string = 'budgetRepository';
        export const weekHoursRepository: string = 'weekHoursRepository';
        export const kendoDataSourceFactory: string = 'kendoDataSourceFactory';
        export const userRepository: string = 'userRepository';
        export const $breeze: string = 'breeze';
        export const entityExtension: string = 'entityExtension';
        export const entityExtensionProvider: string = 'entityExtensionProvider';
        export const dataContext: string = 'dataContext';
        export const managerFactory: string = 'managerFactory';
        export const activePredicate: string = 'activePredicate';
        export const updateMutFieldsService: string = 'updateMutFieldsService';
        export const categoryRepository: string = 'categoryRepository';
        export const lookupRepository: string = 'lookupRepository';
        export const objectRepository: string = 'objectRepository';
        export const projectRepository: string = 'projectRepository';
        export const workRepository: string = 'workRepository';
    }

    export namespace Security {
        export const oauthResponseHandler: string = 'oauthResponseHandler';
        export const oauthHttpConfig: string = 'oauthHttpConfig';
        export const refreshAccessToken: string = 'refreshAccessToken';
        export const sessionMetadata: string = 'sessionMetadata';
        export const logout: string = 'logoutService';
        export const login: string = 'loginService';
        export const authService: string = 'authService';
        export const claimsIdentity: string = 'claimsIdentity';
    }

    export namespace translate {
        export const $translateService: string = '$translate';
        export const $translateProvider: string = '$translateProvider';
    }

    export namespace angular {
        export const $exceptionHandler: string = '$exceptionHandler';
        export const $document: string = '$document';
        export const compile: string = '$compile';
        export const $parse: string = '$parse';
        export const $provide: string = '$provide';
        export const $log: string = '$log';
        export const $locale: string = '$locale';
        export const $animate: string = '$animate';
        export const $rootElement: string = '$rootElement';
        export const $templateCache: string = '$templateCache';
        export const $logProvider: string = '$logProvider';
        export const $interpolate: string = '$interpolate';
        export const $injector: string = '$injector';
        export const $scope: string = '$scope';
        export const $rootScope: string = '$rootScope';
        export const $filter: string = '$filter';
        export const $controller: string = '$controller';
        export const $httpService: string = '$http';
        export const $httpProvider: string = '$httpProvider';
        export const $qService: string = '$q';
        export const $timeoutService: string = '$timeout';
        export const $window: string = '$window';
        export const $locationService: string = '$location';
        export const $localStorageService: string = 'localStorageService';

        export namespace Filters {
            export const date: string = 'date';
        }
    }

    export namespace uirouter {
        export const $stateProvider: string = '$stateProvider';
        export const $urlRouterProvider: string = '$urlRouterProvider';
        export const $stateParams: string = '$stateParams';
        export const $state: string = '$state';
    }
} 
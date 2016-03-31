(function () {
    'use strict';

    angular.module('banco-questoes').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'client/views/home.ng.html'
            })
            .state('perguntas', {
                url: '/perguntas/{id}',
                template: 'TESTE'
            });
    }]);
}());

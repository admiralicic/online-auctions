(function () {
    'use strict';

    angular.module('app', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

            $httpProvider.interceptors.push('authInterceptor');
           
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'app/partials/home.html'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'app/partials/about.html'
                })
                .state('login', {
                    component: 'login',
                    url: '/login'
                });
        });
})();

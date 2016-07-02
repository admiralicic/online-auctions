(function () {
    'use strict';

    angular.module('app').factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$q', '$location', 'tokenService'];

    function authInterceptor($q, $location, tokenService) {

        var interceptor = {
            request: request,
            responseError: responseError
        };

        return interceptor;

        function request(config) {
            var token = tokenService.getToken();
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            return config;
        }

        function responseError(response) {

            if (response.status === 401) {
                $location.path('/login');
            }
            return $q.reject(response);

        }
    }
})();
(function () {
    'use strict';

    angular.module('app').factory('tokenService', tokenService);

    tokenService.$inject = ['$window'];

    function tokenService($window) {

        var service = {
            saveToken: saveToken,
            getToken: getToken,
            clearToken: clearToken
        };

        return service;

        function saveToken(token) {
            // $window.localStorage['apiary-token'] = token;
            $window.localStorage.setItem('apiary-token', token);
        }

        function getToken() {
            // return $window.localStorage['apiary-token'];
           return $window.localStorage.getItem('apiary-token');
        }

        function clearToken() {
            $window.localStorage.removeItem('apiary-token');
        }
    }
})();
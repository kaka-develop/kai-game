(function () {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();

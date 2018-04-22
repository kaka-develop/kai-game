(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .controller('LoginController', LoginController);


    LoginController.$inject = [ '$timeout', 'Auth', 'errorConstants'];

    function LoginController ($timeout, Auth, errorConstants) {
        var vm = this;


    }
})();

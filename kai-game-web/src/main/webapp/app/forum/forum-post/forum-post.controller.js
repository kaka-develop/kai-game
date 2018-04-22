(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .controller('ForumPostController', ForumPostController);


    ForumPostController.$inject = [ '$timeout', 'Auth', 'errorConstants'];

    function ForumPostController ($timeout, Auth, errorConstants) {
        var vm = this;



        // ### Custom JS ###


    }
})();

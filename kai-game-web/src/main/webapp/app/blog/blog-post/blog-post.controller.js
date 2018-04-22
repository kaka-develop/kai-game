(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .controller('BlogPostController', BlogPostController);


    BlogPostController.$inject = [ '$timeout', 'Auth', 'errorConstants'];

    function BlogPostController ($timeout, Auth, errorConstants) {
        var vm = this;



        // ### Custom JS ###


    }
})();

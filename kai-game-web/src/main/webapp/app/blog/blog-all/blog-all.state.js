(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('blog-all', {
            parent: 'blog',
            url: '/blog/all',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/blog/blog-all/blog-all.html',
                    controller: 'BlogAllController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

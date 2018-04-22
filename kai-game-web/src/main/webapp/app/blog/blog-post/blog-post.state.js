(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('blog-post', {
            parent: 'blog',
            url: '/blog/post',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/blog/blog-post/blog-post.html',
                    controller: 'BlogPostController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

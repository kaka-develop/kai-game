(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('forum-post', {
            parent: 'forum',
            url: '/forum/post',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/forum/forum-post/forum-post.html',
                    controller: 'ForumPostController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('forum-all', {
            parent: 'forum',
            url: '/forum/all',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/forum/forum-all/forum-all.html',
                    controller: 'ForumAllController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

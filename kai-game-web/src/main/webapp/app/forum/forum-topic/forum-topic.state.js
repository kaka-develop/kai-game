(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('forum-topic', {
            parent: 'forum',
            url: '/forum/topic',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/forum/forum-topic/forum-topic.html',
                    controller: 'ForumTopicController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

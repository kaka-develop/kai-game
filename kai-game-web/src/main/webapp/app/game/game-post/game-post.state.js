(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('game-post', {
            parent: 'game',
            url: '/game/post/{id}',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/game/game-post/game-post.html',
                    controller: 'GamePostController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('game-review-post', {
            parent: 'game-review',
            url: '/game/review/post',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/game/game-review/game-review-post/game-review-post.html',
                    controller: 'GameReviewPostController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

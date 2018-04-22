(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('game-review', {
            parent: 'game',
            url: '/game/review',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/game/game-review/game-review.html',
                    controller: 'GameReviewController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

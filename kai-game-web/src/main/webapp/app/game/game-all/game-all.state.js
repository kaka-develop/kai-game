(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('game-all', {
            parent: 'game',
            url: '/game/all',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/game/game-all/game-all.html',
                    controller: 'GameAllController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

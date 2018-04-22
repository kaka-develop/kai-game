(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('game-gallery', {
            parent: 'game',
            url: '/game/gallery',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/game/game-gallery/game-gallery.html',
                    controller: 'GameGalleryController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

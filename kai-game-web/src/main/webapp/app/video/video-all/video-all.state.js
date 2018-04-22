(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('video-all', {
            parent: 'video',
            url: '/video/all',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/video/video-all/video-all.html',
                    controller: 'VideoAllController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

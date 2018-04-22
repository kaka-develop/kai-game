(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('video-post', {
            parent: 'video',
            url: '/video/post',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/video/video-post/video-post.html',
                    controller: 'VideoPostController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

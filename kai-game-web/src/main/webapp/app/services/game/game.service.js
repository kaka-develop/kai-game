(function () {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .factory('GameService', GameService);

    GameService.$inject = ['$resource'];

    function GameService ($resource) {
        var host = 'http://localhost:3000';
        var service = $resource(host + '/api/games/:id', {}, {
            'query': {method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'save': { method:'POST' },
            'update': { method:'PUT' },
            'delete':{ method:'DELETE'},
            'hot': {method: 'GET', isArray: true, url: host + '/api/games/hot'},
            'slide': {method: 'GET', isArray: true, url: host + '/api/games/slide'},
            'recent': {method: 'GET', isArray: true, url: host + '/api/games/recent'}
        });

        return service;
    }
})();

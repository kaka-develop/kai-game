(function () {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .factory('VideoService', VideoService);

    VideoService.$inject = ['$resource'];

    function VideoService ($resource) {
        var host = 'http://localhost:3000';
        var service = $resource(host + '/api/videos/:id', {}, {
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
            'getOne': {method: 'GET', url: host + '/api/videos/one'},
            'recent': {method: 'GET', isArray: true, url: host + '/api/videos/recent'}
        });

        return service;
    }
})();

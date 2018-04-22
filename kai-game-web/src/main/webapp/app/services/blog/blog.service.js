(function () {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .factory('BlogService', BlogService);

    BlogService.$inject = ['$resource'];

    function BlogService ($resource) {
        var host = 'http://localhost:3000';
        var service = $resource(host + '/api/blogs/:id', {}, {
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
            'recommendOne': {method: 'GET', url: host + '/api/blogs/recommend/one'},
            'popularOne': {method: 'GET',url: host + '/api/blogs/popular/one'},
            'related': {method: 'GET', isArray: true, url: host + '/api/blogs/related/:id'},
            'game': {method: 'GET', isArray: true, url: host + '/api/blogs/game/:id'}
        });

        return service;
    }
})();

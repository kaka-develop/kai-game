(function () {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .factory('TagService', TagService);

    TagService.$inject = ['$resource'];

    function TagService ($resource) {
        var host = 'http://localhost:3000';
        var service = $resource(host + '/api/tags/:id', {}, {
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
            'blogPopular': {method: 'GET', isArray: true, url: host + '/api/tags/blog/popular'}
        });

        return service;
    }
})();

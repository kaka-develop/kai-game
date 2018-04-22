(function () {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .factory('ForumService', ForumService);

    ForumService.$inject = ['$resource'];

    function ForumService ($resource) {
        var host = 'http://localhost:3000';
        var service = $resource(host + '/api/forums/:id', {}, {
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
            'general': {method: 'GET', isArray: true, url: host + '/api/forums/general'},
            'platform': {method: 'GET', isArray: true, url: host + '/api/forums/platform'}
        });

        return service;
    }
})();

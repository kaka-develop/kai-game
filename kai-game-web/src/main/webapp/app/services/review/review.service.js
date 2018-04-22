(function () {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .factory('ReviewService', ReviewService);

    ReviewService.$inject = ['$resource'];

    function ReviewService ($resource) {
        var host = 'http://localhost:3000';
        var service = $resource(host + '/api/reviews/:id', {}, {
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
            'recent': {method: 'GET', isArray: true, url: host + '/api/reviews/recent'}
        });

        return service;
    }
})();

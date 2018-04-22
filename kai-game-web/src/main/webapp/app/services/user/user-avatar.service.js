(function () {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .factory('UserAvatarService', UserAvatarService);

    UserAvatarService.$inject = ['$resource'];

    function UserAvatarService ($resource) {
        var host = 'http://localhost:3000';

        var service = $resource(host  + '/api/avatars/:id', {}, {
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
            'delete':{ method:'DELETE'}
        });


        return service;
    }
})();

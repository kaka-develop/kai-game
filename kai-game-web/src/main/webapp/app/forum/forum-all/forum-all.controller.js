(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .controller('ForumAllController', ForumAllController);


    ForumAllController.$inject = [ '$timeout', 'Auth', 'AlertService','ForumService','DateUtils','UserAvatarService'];

    function ForumAllController ($timeout, Auth, AlertService,ForumService,DateUtils,UserAvatarService) {
        var vm = this;

        vm.generalForums = [];
        vm.platformForums = [];
        vm.stringToDate = DateUtils.stringToDate;

        loadGeneralForums();
        loadPlatformForums();

        function loadGeneralForums() {
            ForumService.general({}, onSuccess, onError);

            function onSuccess(data) {
                vm.generalForums = data;
                loadAvatars(vm.generalForums);
            }
        }

        function loadPlatformForums() {
            ForumService.platform({}, onSuccess, onError);

            function onSuccess(data) {
                vm.platformForums = data;
                loadAvatars(vm.platformForums);
            }
        }

        function loadAvatars(forums) {
            for (var i = 0; i < forums.length; i++){
                setAvatarUrl(forums[i]);
            }
        }

        function setAvatarUrl(forum) {
            UserAvatarService.get({
                id: forum.latestPost.username
            }, onSuccess, onError);

            function onSuccess(data) {
                forum.latestPost['avatar_url'] = data.avatar_url;
            }
        }

        function onError(error) {
            AlertService.error(error.data.message);
        }

        // ### Custom JS ###


    }
})();

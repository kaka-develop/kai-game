(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .controller('GamePostController', GamePostController);


    GamePostController.$inject = [ '$timeout', 'Auth', 'AlertService','$stateParams','GameService','DateUtils','BlogService','UserAvatarService'];

    function GamePostController ($timeout, Auth, AlertService,$stateParams,GameService,DateUtils,BlogService,UserAvatarService) {
        var vm = this;

        vm.game = {};
        vm.gameBlogs = [];
        vm.stringToDate = DateUtils.stringToDate;

        loadGame();

        function loadGame() {
            GameService.get({
                id: $stateParams.id
            }, onSuccess,onError);

            function onSuccess(data) {
                vm.game = data;
                $('.hero-game').css('background-image', 'url(' + vm.game.image_url + ')');
                loadGameBlogs(vm.game);
            }
        }

        function loadGameBlogs(game) {
            BlogService.game({
                id: game.id
            }, onSuccess,onError);

            function onSuccess(data) {
                vm.gameBlogs = data;
                loadAvatars(vm.gameBlogs);
            }
        }

        function loadAvatars(blogs) {
            for (var i = 0; i < blogs.length; i++){
                setAvatarUrl(blogs[i]);
            }
        }

        function setAvatarUrl(blog) {
            UserAvatarService.get({
                id: blog.username
            }, onSuccess, onError);

            function onSuccess(data) {
                blog['avatar_url'] = data.avatar_url;
            }
        }

        function onError(error) {
            AlertService.error(error.data.message);
        }

        // ### Custom JS ###
        $(document).ready(function() {
            // easyPieChart
            $('.chart').easyPieChart({
                barColor: '#5eb404',
                trackColor: '#e3e3e3',
                easing: 'easeOutBounce',
                onStep: function (from, to, percent) {
                    $(this.el).find('span').text(Math.round(percent));
                }
            });

            // lightbox
            $('[data-lightbox]').lightbox({
                disqus: 'gameforestyakuzieu'
            });
        });

    }
})();

(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .controller('GameAllController', GameAllController);


    GameAllController.$inject = [ '$timeout', 'Auth', 'AlertService', 'GameService','DateUtils'];

    function GameAllController ($timeout, Auth, AlertService,GameService,DateUtils) {
        var vm = this;

        vm.games = [];
        vm.stringToDate = DateUtils.stringToDate;

        loadGames();

        function loadGames() {
            GameService.query({}, onSuccess, onError);

            function onSuccess(data) {
                vm.games = data;
            }

            function onError(error) {
                AlertService.error(error.data.message);
            }
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
            $('.search-game, .navbar-search .form-control').keyup(function () {
                var search = $(this).val().toLowerCase();
                $.each($('.card-title'), function () {
                    if ($(this).text().toLowerCase().indexOf(search) === -1) {
                        $(this).parent().parent().parent().hide();
                    } else {
                        $(this).parent().parent().parent().show();
                    }
                });
            });
        });

    }
})();

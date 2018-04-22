(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService','GameService','DateUtils'];

    function NavbarController ($state, Auth, Principal, ProfileService, LoginService,GameService,DateUtils) {
        var vm = this;

        vm.isNavbarCollapsed = true;
        vm.isAuthenticated = Principal.isAuthenticated;

        ProfileService.getProfileInfo().then(function(response) {
            vm.inProduction = response.inProduction;
            vm.swaggerEnabled = response.swaggerEnabled;
        });

        vm.login = login;
        vm.logout = logout;
        vm.toggleNavbar = toggleNavbar;
        vm.collapseNavbar = collapseNavbar;
        vm.$state = $state;

        vm.games = [];
        vm.loadGames = loadGames;
        vm.stringToDate = DateUtils.stringToDate;

        vm.loadGames();

        function loadGames() {
            GameService.hot({}, onSuccess, onError);

            function onSuccess(data) {
                vm.games = data.slice(0,5);
            }

            function onError(error) {
                AlertService.error(error.data.message);
            }
        }

        function login() {
            collapseNavbar();
            LoginService.open();
        }

        function logout() {
            collapseNavbar();
            Auth.logout();
            $state.go('home');
        }

        function toggleNavbar() {
            vm.isNavbarCollapsed = !vm.isNavbarCollapsed;
        }

        function collapseNavbar() {
            vm.isNavbarCollapsed = true;
        }


    }
})();

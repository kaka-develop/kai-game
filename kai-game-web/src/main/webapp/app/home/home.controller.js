(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state','AlertService','GameService','DateUtils','ReviewService'];

    function HomeController ($scope, Principal, LoginService, $state,AlertService,GameService,DateUtils,ReviewService) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;

        vm.recentGames = [];

        vm.recentReviews = [];

        vm.stringToDate = DateUtils.stringToDate;

        loadRecentGames();
        loadRecentReviews();

        function loadRecentGames() {
            GameService.recent({}, onSuccess, onError);

            function onSuccess(data) {
                vm.recentGames = data;
            }

            function onError(error) {
                AlertService.error(error.data.message);
            }
        }

        function loadRecentReviews() {
            ReviewService.recent({}, onSuccess, onError);

            function onSuccess(data) {
                vm.recentReviews = data;
            }

            function onError(error) {
                AlertService.error(error.data.message);
            }
        }


        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

        getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }
        function register () {
            $state.go('register');
        }


        // ########## Custom JS ##########
        $(document).ready(function() {
            // Full Width Carousel
            $('.owl-slide').owlCarousel({
                nav: true,
                loop: true,
                autoplay: true,
                items: 1
            });
            // Recent Reviews
            $('.owl-list').owlCarousel({
                margin: 25,
                nav: true,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    500: {
                        items: 2
                    },
                    701: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            });
            // lightbox
            $('[data-lightbox]').lightbox();
        });


        // ########## Theme JS ##########
        function setModalMaxHeight(e){this.$element=$(e),this.$content=this.$element.find(".modal-content");var t=this.$content.outerHeight()-this.$content.innerHeight(),n=$(window).width()<768?20:60,a=$(window).height()-(n+t),o=this.$element.find(".modal-header").outerHeight()||0,i=this.$element.find(".modal-footer").outerHeight()||0,s=a-(o+i);this.$content.css({overflow:"hidden"}),this.$element.find(".modal-body").css({"max-height":s,"overflow-y":"auto"})}!function(e){"use strict";function t(t){t.each(function(){var t=e(this),n=t.data("animation");t.addClass(n).one("webkitAnimationEnd animationend",function(){t.removeClass(n)})})}e("[data-toggle='tooltip']").tooltip({container:"body"}),e("[data-toggle='popover']").popover(),e.fn.sticky&&e('section[data-fixed="true"]').sticky({topSpacing:e("#header").outerHeight(),zIndex:1039}).on("sticky-start",function(){e("#header").addClass("no-shadow")}).on("sticky-end",function(){e("#header").removeClass("no-shadow")}),e(window).resize(function(){e(".sticky-wrapper").each(function(){e(this).css("min-height",e(this).children().outerHeight())})}),e(window).scroll(function(){e(this).scrollTop()>40?e("body").addClass("header-scroll"):e("body").removeClass("header-scroll")}),e(".navbar-toggle").click(function(){return e("body").toggleClass("navbar-open"),!1}),e("#header .navbar-left .nav").clone().prependTo("body").addClass("nav-responsive"),e(".nav-responsive .has-dropdown > a").click(function(){return e(this).parent().toggleClass("open"),!1}),e("[data-toggle='search']").click(function(){return e("body").toggleClass("navbar-search-open"),!1}),e(".navbar-search .close").click(function(){return e("body").removeClass("navbar-search-open"),!1}),e("#header .has-dropdown").hover(function(){e(this).addClass("open")},function(){e(this).removeClass("open")}),setTimeout(function(){e(".progress-loaded .progress-bar").each(function(){var t=e(this),n=t.attr("aria-valuenow"),a=0,o=setInterval(function(){a>=n?clearInterval(o):(a+=1,t.css("width",a+"%"))},0)})},0),e(".item-active").removeClass("item-active");var n=e(".carousel-animated");t(n.find(".carousel-item:first").find("[data-animation ^= 'animated']")),n.carousel("pause"),n.on("slide.bs.carousel",function(n){t(e(n.relatedTarget).find("[data-animation ^= 'animated']"))}),e(".full-height .carousel-item").each(function(){e(this).css("height",e(window).height()-e("header").outerHeight())}),e(window).resize(function(){e(".full-height .carousel-item").each(function(){e(this).css("height",e(window).height()-e("header").outerHeight())})}),e(".embed-responsive i").click(function(){e(this).parent().find(".video-play-icon").addClass("animated fadeOut"),e(this).parent().parent().find(".video-caption").addClass("animated fadeOut"),e(this).parent().parent().find("img").addClass("animated fadeOut"),e(this).parent().parent().parent().addClass("played");var t=e(this).parent().parent().parent().data("src");e(this).parent().append('<iframe class="embed-responsive-item" src="'+t+'" allowfullscreen></iframe>')}),e(".modal").on("show.bs.modal",function(){e(this).show(),setModalMaxHeight(this)}),e(window).resize(function(){0!=e(".modal.show").length&&setModalMaxHeight(e(".modal.show"))}),e(".table thead input:checkbox").click(function(){e("input:checkbox").not(this).prop("checked",this.checked)})}(window.jQuery),function(e,t,n,a,o,i,s){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,i=t.createElement(n),s=t.getElementsByTagName(n)[0],i.async=1,i.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(i,s)}(window,document,"script",0,"ga"),ga("create","UA-87018219-1","auto"),ga("send","pageview");

    }

})();



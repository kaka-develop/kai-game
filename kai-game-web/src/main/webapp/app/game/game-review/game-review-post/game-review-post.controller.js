(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .controller('GameReviewPostController', GameReviewPostController);


    GameReviewPostController.$inject = [ '$timeout', 'Auth', 'errorConstants'];

    function GameReviewPostController ($timeout, Auth, errorConstants) {
        var vm = this;



        // ### Custom JS ###
        $(document).ready(function() {
            // select2
            $('.select2').select2({
                minimumResultsForSearch: -1
            });

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
            $('[data-lightbox]').lightbox();
        });

    }
})();

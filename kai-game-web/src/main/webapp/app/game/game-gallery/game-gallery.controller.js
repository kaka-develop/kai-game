(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .controller('GameGalleryController', GameGalleryController);


    GameGalleryController.$inject = [ '$timeout', 'Auth', 'errorConstants'];

    function GameGalleryController ($timeout, Auth, errorConstants) {
        var vm = this;



        // ### Custom JS ###
        $(document).ready(function(){
            // lightbox
            $('[data-lightbox]').lightbox({
                disqus: 'gameforestyakuzieu'
            });
        });

    }
})();

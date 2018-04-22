(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .controller('BlogAllController', BlogAllController);


    BlogAllController.$inject = [ '$timeout', '$stateParams', 'AlertService','BlogService','DateUtils','TagService'];

    function BlogAllController ($timeout, $stateParams, AlertService,BlogService,DateUtils,TagService) {
        var vm = this;

        vm.blogs = [];
        vm.recommendBlog = {};
        vm.popularBlog = {};
        vm.relatedBlogs = [];
        vm.popularTags = [];

        vm.stringToDate = DateUtils.stringToDate;

        loadBlogs();
        loadRecommendBlog();
        loadPopularBlog();
        loadPopularTags();

        function loadBlogs() {
            BlogService.query({}, onSuccess, onError);

            function onSuccess(data) {
                vm.blogs = data;
            }
        }

        function loadRecommendBlog() {
            BlogService.recommendOne({}, onSuccess, onError);

            function onSuccess(data) {
                vm.recommendBlog = data;
            }
        }

        function loadPopularBlog() {
            BlogService.popularOne({}, onSuccess, onError);

            function onSuccess(data) {
                vm.popularBlog = data;
                loadRelatedBlogs(vm.popularBlog.id);
            }
        }

        function loadRelatedBlogs(id) {
            BlogService.related({
                id: id
            }, onSuccess, onError);

            function onSuccess(data) {
                vm.relatedBlogs = data;
            }
        }

        function loadPopularTags() {
            TagService.blogPopular({}, onSuccess, onError);

            function onSuccess(data) {
                vm.popularTags = data;
            }
        }


        function onError(error) {
            AlertService.error(error.data.message);
        }

        // ### Custom JS ###


    }
})();

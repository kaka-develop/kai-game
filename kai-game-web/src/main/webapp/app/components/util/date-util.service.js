(function() {
    'use strict';

    angular
        .module('kaiGameWebApp')
        .factory('DateUtils', DateUtils);

    DateUtils.$inject = ['$filter'];

    function DateUtils($filter) {

        var service = {
            convertDateTimeFromServer: convertDateTimeFromServer,
            convertLocalDateFromServer: convertLocalDateFromServer,
            convertLocalDateToServer: convertLocalDateToServer,
            dateformat: dateformat,
            stringToDate: stringToDate,
            hoursDiffCurrent: hoursDiffCurrent
        };

        return service;

        function convertDateTimeFromServer(date) {
            if (date) {
                return new Date(date);
            } else {
                return null;
            }
        }

        function convertLocalDateFromServer(date) {
            if (date) {
                var dateString = date.split('-');
                return new Date(dateString[0], dateString[1] - 1, dateString[2]);
            }
            return null;
        }

        function convertLocalDateToServer(date) {
            if (date) {
                return $filter('date')(date, 'yyyy-MM-dd');
            } else {
                return null;
            }
        }

        function dateformat() {
            return 'yyyy-MM-dd';
        }

        function stringToDate(date) {
            return new Date(date);
        }

        function timeDiffCurrent(dateString) {
            var currentDate = new Date();
            var date = new Date(dateString);
            return Math.abs(date.getTime() - currentDate.getTime());
        }

        function hoursDiffCurrent(dateString) {
            var timeDiff = timeDiffCurrent(dateString);
            var diffHours = Math.ceil(timeDiff / (1000 * 3600));
            return diffHours;
        }

    }

})();

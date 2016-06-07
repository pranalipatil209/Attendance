angular.module('attendanceApp').directive('autoComplete', function(autoCompleteDataService) {
    return {
        restrict: 'AE',
        link: function(scope, elem) {

            console.log("inside directive");
            elem.autocomplete({
                source: autoCompleteDataService.getSource(), //from your service
                minLength: 1
            });
        }
    };
});

angular.module('attendanceApp').controller('attendanceCtrl',['$scope', function($scope){
    $scope.isActive = true;
    $scope.isDisabled = false;
    $scope.chngClass = function(){
        $scope.isActive = !$scope.isActive;
        $scope.isDisabled = !$scope.isDisabled;
        console.log("abc");
        //$scope.Data = Data;
    }
}])
    .factory('autoCompleteDataService', [function() {
        return {
            getSource: function() {
                return ['apples', 'oranges', 'bananas'];

            }
        }
    }]);

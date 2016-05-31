angular.module('attendanceApp').controller('attendanceCtrl',function($scope){
    $scope.isActive = true;
    $scope.isDisabled = false;
    $scope.chngClass = function(){
        $scope.isActive = !$scope.isActive;
        $scope.isDisabled = !$scope.isDisabled;
    };
});
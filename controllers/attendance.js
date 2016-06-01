angular.module('attendanceApp').controller('attendanceCtrl',function($scope){
    //$scope.Datas = [];
    $scope.isActive = true;
    $scope.isDisabled = false;
    $scope.chngClass = function(){
        $scope.isActive = !$scope.isActive;
        $scope.isDisabled = !$scope.isDisabled;
    };
    //$scope.submitData = function(){
    //    if(this.myText) {
    //        $scope.Datas.push($scope.myText);
    //        $scope.myText = "";
    //    }
    //}
});
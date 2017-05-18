(function () {
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchInput = [];
    $scope.enjoyMsg = "Enjoy!";
    $scope.toomuchMsg = "Too much!";
    $scope.emptyMsg = "Please enter data first";

    $scope.checkInput = function () {
      if($scope.lunchInput === '') {
        $scope.message = $scope.emptyMsg;
      }
      if($scope.lunchInput.split(",").length <= 3) {
        $scope.message = $scope.enjoyMsg;
      }else{
        $scope.message = $scope.toomuchMsg;
      }
    }
  }

})();

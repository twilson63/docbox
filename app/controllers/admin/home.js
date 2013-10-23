angular.module('app')
  .controller('adminHome', function($scope, account) {
    $scope.account = account;
  });
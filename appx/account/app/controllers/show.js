angular.module('app.account')
  .controller('showAccount', function($scope, account) {
    $scope.account = account;
  });
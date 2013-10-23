angular.module('app')
  .controller('adminAccountEdit', function($scope, account, $location, alerts) {
    $scope.account = account;
    $scope.$on('notify', function(info) {
      if (info.action === 'UPDATED') { alerts.push(info.msg); }
      $location.path('/admin');
    });
  });
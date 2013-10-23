angular.module('app.account')
  .controller('editAccount', function($scope) {
    $scope.account = account;
    $scope.save = function(account) {
      account.updatedAt = new Date();
      account.save();
      $scope.$broadcast('notify', { action: 'UPDATED', 
        msg: 'Account saved Successfully!'});
    };
    $scope.cancel = function() {
      $scope.$broadcast('notify', { action: 'CANCELLED',
        msg: 'Account Edit was cancelled'})
    };
  });
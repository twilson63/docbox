angular.module('app.account')
  .directive('editAccount', function() {
    return {
      restrict: 'E',
      transclude: false,
      replace: true,
      controller: 'editAccount',
      templateUrl: 'app/templates/edit.html',
      resolve: ...
    }
  });
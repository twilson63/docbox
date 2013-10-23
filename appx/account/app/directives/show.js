angular.module('app.account')
  .directive('showAccount', function() {
    return {
      restrict: 'E',
      transclude: false,
      replace: true,
      controller: 'showAccount',
      templateUrl: 'app/templates/show.html'
    }
  });
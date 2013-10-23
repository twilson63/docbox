angular.module('app', [
  'app.session', 
  'app.account',
  'ngUpload',
  'app.admin'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/admin', { controller: 'adminHome', 
        templateUrl: 'app/templates/admin/home.html',
        resolve: { account: function(accounts) { 
          return accounts.get(sessionStorage.accountId);    
        }}
      })
      .when('/admin/accounts/:id/edit', {
        controller: 'adminAccountEdit', 
        templateUrl: 'app/templates/admin/edit-account.html',
        resolve: { account: function(accounts, $routeParams) {
          return accounts.get($routeParams.id);
        }}
      });
  });
  
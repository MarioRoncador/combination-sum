(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeController as home',
      templateUrl: '/templates/home.html'
    });
  }

  angular
  .module('combinationSum', ['ui.router'])
  .config(config);
})();

/**
 *  @file
 *  Configuartion file.
 */
(function(){
  angular
    .module('todo')
    .config(config);

    function config($routeProvider, $locationProvider) {
      $path = '/js/app/modules/login/template';
      $routeProvider
        .when('/', {templateUrl: '/templates/home.html'})
        .when('/login', {templateUrl: '/js/app/modules/login/template/login.html'});

      //$locationProvider.html5Mode(true);
    }
})();

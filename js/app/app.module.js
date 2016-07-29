/**
 * Define Todo App Module.
 */
(function() {
  angular.module('login', []);
  angular
    .module("todo", [
      'ngRoute',
      'login',
    ]);
})();

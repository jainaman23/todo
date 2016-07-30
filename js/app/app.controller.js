/**
 * Controller File.
 */
(function() {
  angular.module('todo')
    .controller('Fundamental', Fundamental);

  function Fundamental($location, $scope, $timeout) {
    $url = $location.$$url;
    $scope.path = $url.substring(1);
  }
})();

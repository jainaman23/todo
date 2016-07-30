/**
 * @file
 * Controller file for login module.
 */
(function() {
  angular.module('login')
    .controller('LoginPanel', LoginPanel);

  function LoginPanel($scope, $timeout) {
    $details = [];

    $scope.LoginDetails = function() {
    // console.log($scope);
    if(!angular.isDefined($scope.username) || !(angular.isDefined($scope.password))) {
      console.log('asdf');
      $scope.message = "Please Enter Correct Credentials";
      $scope.msg_class = 'alert alert-danger';
      $timeout(function(){
        $scope.msg_class = 'hide';
      }, 2000);
    }
    else {
      $user = $scope.username;
      $pass = $scope.password;
    }
  };

  }
})();

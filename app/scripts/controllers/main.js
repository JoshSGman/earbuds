'use strict';

var app = angular.module('auerasApp');

app.controller('MainController', function($scope, $http){
  $scope.emailForm = 'E-mail';

  $scope.checkForm = function() {
    $scope.emailForm = $scope.emailForm === '' ? 'E-mail' : $scope.emailForm;
  };

  $scope.validateEmail = function() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test($scope.emailForm) ? addEmail() : $scope.emailForm = 'Please Enter A Valid Email';
  };

  var addEmail = function() {
    $http.post('/landing/email', {'email': $scope.emailForm})
    .success()
    .error(function(err){
      console.error('There was an error in sending the email:', err);
    });
    $scope.emailForm = 'Thank you for signing up!';
  };

});

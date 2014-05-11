'use strict';

var app = angular.module('auerasApp', [
            'ui.router',
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute'
          ]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('/', {
        url : '/',
        templateUrl : 'views/main.html',
        controller: 'MainController'
      });

    $urlRouterProvider.otherwise('/');
  });

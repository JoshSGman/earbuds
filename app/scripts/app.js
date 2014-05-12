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
        // resolve : {
        //   loadWater : function loadWater(preloadImage) {
        //     return preloadImage.preloadWater(); 
        //   }
        // }
      });

    $urlRouterProvider.otherwise('/');
  });

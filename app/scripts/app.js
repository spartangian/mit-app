'use strict';

/**
 * @ngdoc overview
 * @name mitAppApp
 * @description
 * # mitAppApp
 *
 * Main module of the application.
 */
angular
  .module('mitAppApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact_us', {
        templateUrl: 'views/contact_us.html',
        controller: 'ContactUsCtrl',
        controllerAs: 'contact_us'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

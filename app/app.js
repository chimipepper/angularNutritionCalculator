var calculator = angular.module('calculator', ['ui.router']);

calculator.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'homeController'
        });
    //add script tags for controllers to index.html

});

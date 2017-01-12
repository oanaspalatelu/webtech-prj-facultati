 "use strict";

/*global angular*/
let app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('');
    $stateProvider
        .state('despre', {
            url: '/despre',
            templateUrl : 'views/despre.html',
        })
        .state('pareri', {
            url: '/pareri',
            templateUrl: 'views/pareri.html',
            
        })
        .state('ASELicenta', {
            url: '/ASELicenta',
            templateUrl :'views/ASEL.html'
        })
        .state('UPBLicenta', {
            url: '/UPBLicenta',
            templateUrl :'views/UPBL.html'
        })
        .state('UNIVLicenta', {
            url: '/UNIVLicenta',
            templateUrl :'views/UBL.html'
       
        });
}]);
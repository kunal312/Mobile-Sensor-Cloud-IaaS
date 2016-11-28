var sensorCloud =  angular.module('sensorCloud',['ui.router','ngMessages','ngMap']);

sensorCloud.config(function($stateProvider,$urlRouterProvider,$locationProvider)

{

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('managesensors', {
            url:'/',
            templateUrl: '/sensorManagment/sensors.html',
            controller: 'sensorController'

        })

        .state('managesensors.addsensors', {
            url: '/addsensors',
            templateUrl: 'sensorManagment/addsensors.html',
            controller : 'addsensorsController',


        })

        .state('managesensors.addsensors2location', {
            url: '/addsensors-location',
            templateUrl: 'sensorManagment/addsensorslocation.html',
           controller : 'addsensorslocationController',
           params: {"platforms" :  null,
                "sensortype" :null,
                "physicalsensor" :null,
                "connectivity" :null,
                "storage" :null,
                "resourceallocation" :null}


        })

        .state('managesensors.removesensors', {
            url: '/removesensors',
            templateUrl: 'sensorManagment/removesensors.html',
            controller : 'removesensorsController',


        })

        .state('managesensors.viewsensors', {
            url: '/viewsensors',
            templateUrl: 'sensorManagment/viewsensors.html',
            controller : 'viewsensorsController',
            resolve: {
                data: function ($http) {
                    return $http.post("/viewSensors")
                        .then(function (response) {

                            return response.data;

                        });
                }


            }


        })






});
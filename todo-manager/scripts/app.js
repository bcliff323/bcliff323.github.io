define([
    'angular',
    'controllers/controllers',
    'services/services',
    'filters/filters',
    'directives/directives'
    ], 
    function (angular) {
        var app = angular.module('RootApp', 
            [
                'controllers', 
                'services',
                'filters', 
                'directives'
            ]
        ).config(function($routeProvider){
            $routeProvider
                .when('/',
                    { 
                        templateUrl: 'views/list.html',
                        controller: 'ListCtrl'
                    })
                .when('/:name',
                    {
                        templateUrl: 'views/list.html',
                        controller: 'ListCtrl'
                    });
        });

        return app;
    }
);
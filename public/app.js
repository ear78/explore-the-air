angular.module('myApp', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                controller:'homeCtrl',
                controllerAs: 'home',
                templateUrl: '../views/home.html'
            })
            .when('/info', {
                controller: 'infoCtrl',
                controllerAs: 'info',
                templateUrl: '../views/info.html'
            })
            .when('/packages', {
                controller: 'packagesCtrl',
                controllerAs: 'packages',
                templateUrl: '../views/packages.html'
            })
            .otherwise('/');
    }])

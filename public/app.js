angular.module('myApp', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                controller:'homeCtrl',
                controllerAs: 'home',
                templateUrl: '../views/home.html'
            })
            .otherwise('/');
    }])

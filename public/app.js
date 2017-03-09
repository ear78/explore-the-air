angular.module('myApp', [require('angular-route')])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                controller:'home',
                controllerAs: 'home',
                templateUrl: '../views/home.html'
            })
            .otherwise('/');
    }])

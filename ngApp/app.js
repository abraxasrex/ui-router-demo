var CuteApp;
(function (CuteApp) {
    angular.module('CuteApp', ['ui.router']).config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider.state('Home', {
            url: '/',
            templateUrl: './bunnies.html',
            controller: CuteApp.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('Bunnies', {
            url: '/bunnies',
            templateUrl: './bunnies.html',
            controller: CuteApp.Controllers.BunniesController,
            controllerAs: 'controller'
        })
            .state('Ducks', {
            url: '/ducks',
            templateUrl: './ducks.html',
            controller: CuteApp.Controllers.DucksController,
            controllerAs: 'controller'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(CuteApp || (CuteApp = {}));

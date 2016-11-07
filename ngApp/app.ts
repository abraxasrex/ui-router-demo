namespace CuteApp {
  angular.module('CuteApp', ['ui.router']).config(
    ($stateProvider: ng.ui.IStateProvider,
      $locationProvider: ng.ILocationProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
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
        /// normal-looking url with no hash
        $locationProvider.html5Mode(true);

      });

  }

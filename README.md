
# pre-routing boilerplate  
Angular ts project setup:  
1. Bower install front end dependencies (angular, ui-router, 3rd party libs, etc.  **
2. Create .ts file then use atom palette to get predefined tsconfig.json
3. Install typings for front end dependencies, i.e.
4. typings install dt~angular --global --save
5. Npm install back end packages if necessary **


** order flexible



# routing  
0. we need a server for state routing to work properly. let's use lite-server.it's lite.  
- set up a bs-config.json:  

```{
    "port": 8000,
  "server": {
    "baseDir": "./ngApp"
  }
}
```

1. setup: base href, ui-sref and ui-view directives
1.5. angular config for ui-router:  

```
namespace CuteApp {
  angular.module('CuteApp', ['ui.router']).config(
    ($stateProvider: ng.ui.IStateProvider,
      $locationProvider: ng.ILocationProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider) => {});

  }
  ```  
  
2. setup: ui-router dependencies, $stateprovider.state() method,
   $urlRouterProvider.otherwise(), $locationProvider.html5mode(true)
3. create a state: a. url, b. templateurl, c. controller, d., controllerAs
4. create separate controllers file
5. create html templates
6. routing choices, ui-sref or <a href="/page1">Page 1</a> standard anchor routing
7. setting up express server: 1. ```__dirname and 'path', 2. express middleware configs```
8. route parameters: url: '/page1:id',

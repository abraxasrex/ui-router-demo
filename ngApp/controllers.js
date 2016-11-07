var CuteApp;
(function (CuteApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($state) {
                this.$state = $state;
                this.animal = 'Home (not an animal)';
                this.homeMessage = "Welcome to cute animals webpage.";
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var BunniesController = (function () {
            function BunniesController($state) {
                this.$state = $state;
                this.animal = 'Bunnies!';
            }
            return BunniesController;
        }());
        Controllers.BunniesController = BunniesController;
        var DucksController = (function () {
            function DucksController($state) {
                this.$state = $state;
                this.animal = 'Ducks!';
            }
            return DucksController;
        }());
        Controllers.DucksController = DucksController;
    })(Controllers = CuteApp.Controllers || (CuteApp.Controllers = {}));
})(CuteApp || (CuteApp = {}));

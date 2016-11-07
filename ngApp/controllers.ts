namespace CuteApp.Controllers {
  export class HomeController {
    public animal;
    public homeMessage;
    constructor(private $state: ng.ui.IStateService){
      this.animal  = 'Home (not an animal)';
      this.homeMessage = "Welcome to cute animals webpage.";
    }
  }
  export class BunniesController {
    public animal;
    constructor(private $state: ng.ui.IStateService){
       this.animal = 'Bunnies!';
    }
  }
  export class DucksController {
    public animal;
    constructor(private $state: ng.ui.IStateService){
      this.animal = 'Ducks!';
    }
  }
}

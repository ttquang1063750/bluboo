import angular from 'angular';


class HomeController {
  constructor() {
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }
}

export default angular.module('component.home', [])
    .component('homeComponent', {
      template: require("./index.html"),
      controller: HomeController,
      controllerAs:"$ctrl"
    })
    .name;
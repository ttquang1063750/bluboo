import angular from 'angular';


class SupportController {
  constructor() {
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }
}

export default angular.module('component.support', [])
    .component('supportComponent', {
      template: require("./index.html"),
      controller: SupportController,
      controllerAs:"$ctrl"
    })
    .name;
import angular from 'angular';


class PromotionalController {
  constructor() {
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }
}

export default angular.module('component.promotional', [])
    .component('promotionalComponent', {
      template: require("./index.html"),
      controller: PromotionalController,
      controllerAs:"$ctrl"
    })
    .name;
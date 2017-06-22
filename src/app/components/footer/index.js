import angular from 'angular';


class FooterController {
  constructor() {}
}

FooterController.$inject = [];


export default angular.module('component.footer', [])
    .component('footerComponent', {
      template: require("./index.html"),
      controller: FooterController,
      controllerAs:"$ctrl"
    })
    .name;
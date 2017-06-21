import angular from 'angular';
import FooterController from './footer.controller';

let footerComponent = {
  template: require("./footer.html"),
  controller: FooterController,
  controllerAs:"$ctrl"
};

export default angular.module('component.footer', [])
    .component('footerComponent', footerComponent)
    .name;
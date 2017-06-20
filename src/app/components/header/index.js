import angular from 'angular';
import HeaderController from './header.controller';

let headerComponent = {
  template: require("./header.html"),
  controller: HeaderController,
  controllerAs:"$ctrl"
};

export default angular.module('component.header', [])
    .component('headerComponent', headerComponent)
    .name;
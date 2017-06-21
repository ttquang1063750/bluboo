import angular from 'angular';
import HomeController from './home.controller';

let homeComponent = {
  template: require("./home.html"),
  controller: HomeController,
  controllerAs:"$ctrl"
};

export default angular.module('component.home', [])
    .component('homeComponent', HomeController)
    .name;
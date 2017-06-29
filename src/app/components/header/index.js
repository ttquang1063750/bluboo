import angular from 'angular';



class HeaderController {
  constructor() {}

  // on init component
  $onInit(){

  }

  onSelect($event){
    console.log($event);
  }
}


// DI
HeaderController.$inject = [];


export default angular.module('component.header', [])
    .component('headerComponent', {
      template: require("./index.html"),
      controller: HeaderController,
      controllerAs:"$ctrl"
    })
    .name;
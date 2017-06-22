import angular from 'angular';

class ProductsController {
  constructor() {}
}

export default angular.module('component.products', [])
    .component('productsComponent', {
      template: require("./index.html"),
      controller: ProductsController,
      controllerAs:"$ctrl"
    })
    .name;
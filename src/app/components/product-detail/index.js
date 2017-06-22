import angular from 'angular';


class ProductDetailController {
  constructor() {
  }
}

export default angular.module('component.productDetail', [])
    .component('productDetailComponent', {
      template: require("./index.html"),
      controller: ProductDetailController,
      controllerAs:"$ctrl"
    })
    .name;
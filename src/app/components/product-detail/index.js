import angular from 'angular';
let wow = require('wowjs');

class ProductDetailController {
  constructor($stateParams, ProductService) {

    let id = $stateParams.id;
    this.product = ProductService.getProduct(id);
  }


  rating(start){
    this.product.start = start;
  }
}


ProductDetailController.$inject = ['$stateParams', 'ProductService'];

export default angular.module('component.productDetail', [])
    .component('productDetailComponent', {
      template: require("./index.html"),
      controller: ProductDetailController,
      controllerAs:"$ctrl"
    })
    .name;
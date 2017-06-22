import angular from 'angular';

class ProductDetailController {
  constructor($stateParams, ProductService) {
    let id = $stateParams.id;
    this.product = ProductService.getProduct(id);
  }


  rating(start){
    this.product.start = start;
  }

  changeColor(color){
    console.log(color);
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
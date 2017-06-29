import angular from 'angular';


class HomeController {
  constructor(ProductService) {
    this.products = ProductService.products;

    this.productSale = this.products[0];
  }


  selectPromotionProduct(product){
    this.productSale = product;
  }
}

HomeController.$inject = ['ProductService'];

export default angular.module('component.home', [])
    .component('homeComponent', {
      template: require("./index.html"),
      controller: HomeController,
      controllerAs:"$ctrl"
    })
    .name;
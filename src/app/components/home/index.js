import angular from 'angular';


class HomeController {
  constructor() {
    this.products = [
      {id: 1, url: '/img/banner_product.png',banner: '/img/banner_product_promotion.png', name:"bluboo edge 1", price: 3000000},
      {id: 2, url: '/img/banner_product.png',banner: '/img/banner_product_promotion.png', name:"bluboo edge 2", price: 3200000},
      {id: 3, url: '/img/banner_product.png',banner: '/img/banner_product_promotion.png', name:"bluboo edge 3", price: 3300000},
      {id: 4, url: '/img/banner_product.png',banner: '/img/banner_product_promotion.png', name:"bluboo edge 4", price: 3400000},
      {id: 5, url: '/img/banner_product.png',banner: '/img/banner_product_promotion.png', name:"bluboo edge 5", price: 3500000},
    ];

    this.productSale = this.products[0];
  }
}

export default angular.module('component.home', [])
    .component('homeComponent', {
      template: require("./index.html"),
      controller: HomeController,
      controllerAs:"$ctrl"
    })
    .name;
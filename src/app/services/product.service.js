import angular from 'angular';
let _ = require('lodash');

class ProductService {
  constructor() {
    this.products = [
      {
        id: 1,
        url: '/img/banner_product.png',
        banner: '/img/banner_product_promotion.png',
        name:"bluboo edge 1",
        description:"Android 6.0 + MTK6737 Quad Core 1.5GHz + 5.5”FHD 2Gb RAM + 16Gb ROM + 5.0MP Front Camera 13.0MP Dual Back Cameras + Fingerprint Scanner",
        price: 3000000,
        colors:[
          {id:1, color: "#f3dfc7"},
          {id:2, color: "#6f6f6f"},
          {id:3, color: "#ffb9b9"}
        ],
        start:2
      },
      {
        id: 2,
        url: '/img/banner_product.png',
        banner: '/img/banner_product_promotion.png',
        name:"bluboo edge 1",
        description:"Android 6.0 + MTK6737 Quad Core 1.5GHz + 5.5”FHD 2Gb RAM + 16Gb ROM + 5.0MP Front Camera 13.0MP Dual Back Cameras + Fingerprint Scanner",
        price: 3200000,
        colors:[
          {id:1, color: "#f3dfc7"},
          {id:2, color: "#6f6f6f"},
          {id:3, color: "#ffb9b9"}
        ],
        start:4
      },
      {
        id: 3,
        url: '/img/banner_product.png',
        banner: '/img/banner_product_promotion.png',
        name:"bluboo edge 1",
        description:"Android 6.0 + MTK6737 Quad Core 1.5GHz + 5.5”FHD 2Gb RAM + 16Gb ROM + 5.0MP Front Camera 13.0MP Dual Back Cameras + Fingerprint Scanner",
        price: 3400000,
        colors:[
          {id:1, color: "#f3dfc7"},
          {id:2, color: "#6f6f6f"},
          {id:3, color: "#ffb9b9"}
        ],
        start:3
      },
      {
        id: 4,
        url: '/img/banner_product.png',
        banner: '/img/banner_product_promotion.png',
        name:"bluboo edge 1",
        description:"Android 6.0 + MTK6737 Quad Core 1.5GHz + 5.5”FHD 2Gb RAM + 16Gb ROM + 5.0MP Front Camera 13.0MP Dual Back Cameras + Fingerprint Scanner",
        price: 3600000,
        colors:[
          {id:1, color: "#f3dfc7"},
          {id:2, color: "#6f6f6f"},
          {id:3, color: "#ffb9b9"}
        ],
        start:2
      }
    ];
  }


  getProduct(id) {
    return _.find(this.products, function(product){
      return product.id == id;
    });
  }
}

export default angular.module('services.products', [])
    .service('ProductService', ProductService)
    .name;
import 'bootstrap/dist/css/bootstrap.css';
import 'wowjs/css/libs/animate.css';
import 'slick-carousel/slick/slick.scss';
import '../style/app.scss';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import {WOW} from 'wowjs';


//Configs
import routing from './app.config';


// Components
import headerComponent  from './components/header';
import footerComponent  from './components/footer';
import PromotionalComponent from './components/promotional';
import SupportComponent from './components/support';
import homeComponent  from './components/home';
import productsComponent  from './components/products';
import productDetailComponent  from './components/product-detail';


let components = [
  headerComponent,
  footerComponent,
  PromotionalComponent,
  SupportComponent,
  homeComponent,
  productsComponent,
  productDetailComponent
];


// Services
import ProductService from './services/product.service';

let services = [
  ProductService
];


//Directive
import fullpage from './directives/fullpage.directive';
let directives = [
  fullpage
];

angular
    .module('app', [
      uirouter,
      ...components,
      ...services,
      ...directives
    ])
    .config(routing)
    .run(['$rootScope', function ($rootScope) {

      //create a new instance
      let wow = new WOW();
      wow.init();

      $rootScope.$on('$viewContentLoaded', function () {
        //when the view changes sync wow
        wow.sync();
      });
    }]);
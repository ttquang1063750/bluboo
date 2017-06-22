import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.scss';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './app.config';
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

angular
    .module('app', [
      uirouter,
      ...components
    ])
    .config(routing);
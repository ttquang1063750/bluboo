import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.scss';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './app.config';
import headerComponent  from './components/header';
import footerComponent  from './components/footer';
import homeComponent  from './components/home';

let components = [
  headerComponent,
  footerComponent,
  homeComponent
];

angular
    .module('app', [
      uirouter,
      ...components
    ])
    .config(routing);
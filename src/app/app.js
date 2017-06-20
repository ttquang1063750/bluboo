import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';

angular
    .module('app', [uirouter, home])
    .config(routing);
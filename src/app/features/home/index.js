import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import headerComponent    from '../../components/header';

export default angular.module('app.home', [uirouter, headerComponent])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;
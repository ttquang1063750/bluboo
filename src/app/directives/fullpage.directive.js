import angular from 'angular';
import $ from 'jquery';
import fullpage from 'fullpage.js';

function fullPage() {
  return {
    link: function($scope, $element, $attrs){
      $($element).fullpage();
    }
  }
}

export default angular.module('directives.fullpage', [])
    .directive('fullPage', fullPage)
    .name;
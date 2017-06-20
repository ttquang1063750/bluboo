import angular from 'angular';
import $ from 'jquery';

function greeting() {
  return {
    restrict: 'A',
    scope: {
      name: '='
    },
    template: '<h1>Hello, {{name}}</div>',
    controller: ($scope, $element) =>{
      $($element).on("click", function(){
        console.log(this);
        $(this).css({"background":"green"})
      })
    }
  }
}

export default angular.module('directives.greeting', [])
    .directive('greeting', greeting)
    .name;
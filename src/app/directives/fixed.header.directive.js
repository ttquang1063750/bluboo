import angular from 'angular';
import $ from 'jquery';


function FixedHeader($window) {
  return {
    link: function (scope, element, attrs) {
      let fixedHeader = attrs.fixedHeader,
          offsetTop = $(element).offset().top + 5;

      $($window).on('scroll', function (e) {
        if (this.pageYOffset >= offsetTop) {
          $(element).addClass(fixedHeader);
        } else {
          $(element).removeClass(fixedHeader);
        }
      });
    }
  };
}


FixedHeader.$inject = ['$window'];

export default angular.module('directives.fixedHeader', [])
    .directive('fixedHeader', FixedHeader)
    .name;
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
      .state('app.home', {
        url: '/home',
        views: {
          "wrapper@app":{
            template: require('./home.html'),
            controller: 'HomeController',
            controllerAs: '$ctrl'
          }
        }
      })
}
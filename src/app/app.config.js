routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];
export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');

  $stateProvider
      .state('app', {
        abstract: true,
        url: '',
        views: {
          "header@app": {
            component: 'headerComponent'
          },
          "content@": {
            template: require('./app.index.html')
          },
          "footer@app": {
            component: 'footerComponent'
          },
        }
      })
      .state('app.home', {
        url: '/home',
        views: {
          "content@app":{
            component: 'homeComponent'
          }
        }
      })
}
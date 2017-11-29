angular
.module('test_task')
.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
	function($stateProvider, $locationProvider, $urlRouterProvider) {

		$stateProvider

			// home page
			.state('home', {
				templateUrl: 'views/home.html',
				url: '/',
				controller: 'MainCtrl',
				controllerAs: 'vm'
			})
			

		//$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');
}]);
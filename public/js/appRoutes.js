angular
.module('portfolio')
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
			.state('about', {
				templateUrl: 'views/about.html',
				url: '/about',
				controller: 'AboutCtrl',
				controllerAs: 'vm'
			})
			.state('contact', {
				templateUrl: 'views/contact.html',
				url: '/contact',
				controller: 'ContactCtrl',
				controllerAs: 'vm'
			})
			.state('galerry', {
				templateUrl: 'galerry.html',
				url: '/galerry',
				controller: 'GalleryCtrl',
				controllerAs: 'vm'
			})
			.state('galerry-admin', {
				templateUrl: 'views/gallery-admin.html',
				url: '/galerry-admin',
				controller: 'GalleryAdminCtrl',
				controllerAs: 'vm'
			})
			.state('admin', {
				templateUrl: 'adminViews/admin.html',
				url: '/admin',
				controller: 'AdminCtrl',
				controllerAs: 'vm'
			})
			.state('photos', {
				templateUrl: 'photos.html',
				url: '/photos/:id',
				controller: 'PhotosCtrl',
				controllerAs: 'vm'
			})
			.state('addPhoto', {
				templateUrl: 'views/addPhoto.html',
				url: '/addPhoto/',
				params: {
            		id: null
        		},
				controller: 'AddPhotoCtrl',
				controllerAs: 'vm'
			})

		//$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');
}]);
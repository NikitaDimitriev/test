angular
    .module('portfolio')
    .factory('PortfolioService', PortfolioService);

PortfolioService.$inject = ['$http'];

function PortfolioService($http) {
	return {
		getAlbums: getAlbums,
        getPhotos: getPhotos,
        deleteAlbum: deleteAlbum
	};

	function getAlbums() {
		return $http.get('/api/albums')
            .then(complete)
            .catch(failed);
    }
    
    function deleteAlbum(id) {
		return $http.delete('/api/delete-album/' + id)
            .then(complete)
            .catch(failed);
	}

    function getPhotos(id) {
        return $http.get('/api/albums/'+ id)
            .then(complete)
            .catch(failed);
    }

	function complete(response) {
        return response.data;
    }

    function failed(error) {
        console.error('XHR Failed for getAvengers.' + error.data);
    }
}
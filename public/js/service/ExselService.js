angular
.module('test_task')
.factory('ExselService', ExselService);

ExselService.$inject = ['$http'];

function ExselService($http) {
return {
addItems: addItems,
getItems: getItems
};

function addItems(items) {
    console.log(items);
    return $http.post('/api/items', items)
        .then(complete)
        .catch(failed);
}
function getItems() {
    return $http.get('/api/getItems')
        .then(complete)
        .catch(failed);
}

function complete(response) {
    console.log(response.data)
    return response.data;
}

function failed(error) {
    console.error('XHR Failed for getAvengers.' + error.data);
}
};
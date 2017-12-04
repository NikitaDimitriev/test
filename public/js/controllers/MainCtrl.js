angular
	.module('test_task')
	.controller('MainCtrl', MainCtrl);
MainCtrl.$inject = ['$scope', 'ExselService'];

function MainCtrl($scope, ExselService) {
	var vm = this;
	vm.sum = sum;
	vm.error = "";
	vm.addItems = addItems;
	vm.items = {
		a1: '',
		a2: '',
		a3: '',
		b1: '',
		b2: '',
		b3: '',
		x: '',
		y: '',
		result: ''
	};

	activate();

	function activate() {
		getValue();
	}
	//Поліфіл взятий з https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
	Number.isInteger = Number.isInteger || function (value) {
		return typeof value === 'number'
			&& Number.isFinite(value)
			&& !(value % 1);
	};

	function sum(x, y) {
		switch (x) {
			case 'A1':
			case 'a1':
				x = vm.items.a1; vm.error = "";
				break;
			case 'A2':
			case 'a2':
				x = vm.items.a2; vm.error = "";
				break;
			case 'A3':
			case 'a3':
				x = vm.items.a3; vm.error = "";
				break;
			case 'B1':
			case 'b1':
				x = vm.items.b1; vm.error = "";
				break;
			case 'B2':
			case 'b2':
				x = vm.items.b2; vm.error = "";
				break;
			case 'B3':
			case 'b3':
				x = vm.items.b3; vm.error = "";
				break;
			default:
				vm.error = "Ви ввели не вірне поле"
		}
		switch (y) {
			case 'A1':
			case 'a1':
				y = vm.items.a1; console.log("a1", y);
				break;
			case 'A2':
			case 'a2':
				y = vm.items.a2; console.log("a2", y);
				break;
			case 'A3':
			case 'a3':
				y = vm.items.a3; console.log("a3", y);
				break;
			case 'B1':
			case 'b1':
				y = vm.items.b1;
				break;
			case 'B2':
			case 'b2':
				y = vm.items.b2;
				break;
			case 'B3':
			case 'b3':
				y = vm.items.b3;
				break;
			default:
				break;
		}
		x = parseInt(x, 10);
		y = parseInt(y, 10);
		if (Number.isInteger(x) && Number.isInteger(y)) {
			return vm.items.result = x + y, vm.error = "";
		} else { return vm.error = "Ви ввели не вірні данні.", vm.result = ""};
	}

	function addItems() {
		console.log(vm.items);
		ExselService.addItems(vm.items)
	            .then(function(data) {
	                console.log('test:', data);
	            });
	}

	function getValue() {
		ExselService.getItems()
				.then(function(data){
					vm.items = data[0];
					console.log("get value:", vm.items);
				});
	}


}
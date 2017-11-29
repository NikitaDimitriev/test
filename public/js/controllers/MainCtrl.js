angular
	.module('test_task')
	.controller('MainCtrl', MainCtrl);
MainCtrl.$inject = ['$scope', '$cookieStore'];

function MainCtrl($scope, $cookieStore) {
	var vm = this;
	vm.savea1 = savea1;
	vm.savea2 = savea2;
	vm.savea3 = savea3;
	vm.saveb1 = saveb1;
	vm.saveb2 = saveb2;
	vm.saveb3 = saveb3;
	vm.saveX = saveX;
	vm.saveY = saveY;
	vm.saveResult = saveResult;
	vm.sum = sum;
	vm.error = "";

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
				x = vm.a1; vm.error = "";
				break;
			case 'A2':
			case 'a2':
				x = vm.a2; vm.error = "";
				break;
			case 'A3':
			case 'a3':
				x = vm.a3; vm.error = "";
				break;
			case 'B1':
			case 'b1':
				x = vm.b1; vm.error = "";
				break;
			case 'B2':
			case 'b2':
				x = vm.b2; vm.error = "";
				break;
			case 'B3':
			case 'b3':
				x = vm.b3; vm.error = "";
				break;
			default:
				vm.error = "Ви ввели не вірне поле"
		}
		switch (y) {
			case 'A1':
			case 'a1':
				y = vm.a1; console.log("a1", y);
				break;
			case 'A2':
			case 'a2':
				y = vm.a2; console.log("a2", y);
				break;
			case 'A3':
			case 'a3':
				y = vm.a3; console.log("a3", y);
				break;
			case 'B1':
			case 'b1':
				y = vm.b1;
				break;
			case 'B2':
			case 'b2':
				y = vm.b2;
				break;
			case 'B3':
			case 'b3':
				y = vm.b3;
				break;
			default:
				break;
		}
		x = parseInt(x, 10);
		y = parseInt(y, 10);
		if (Number.isInteger(x) && Number.isInteger(y)) {
			return vm.result = x + y, vm.error = "";
		} else { return vm.error = "Ви ввели не вірні данні.", vm.result = ""};
	}

	function saveX(value) {

		$cookieStore.put('x', value);

	}
	function saveY(value) {

		$cookieStore.put('y', value);

	}
	function saveResult(value) {

		$cookieStore.put('result', value);

	}
	function savea1(value) {

		$cookieStore.put('a1', value);

	}
	function savea2(value) {

		$cookieStore.put('a2', value);
	}
	function savea3(value) {

		$cookieStore.put('a3', value);

	}
	function saveb1(value) {


		$cookieStore.put('b1', value);

	}
	function saveb2(value) {

		$cookieStore.put('b2', value);
	}
	function saveb3(value) {


		$cookieStore.put('b3', value);
	}
	function getValue() {
		vm.a1 = $cookieStore.get('a1');
		vm.a2 = $cookieStore.get('a2');
		vm.a3 = $cookieStore.get('a3');
		vm.b1 = $cookieStore.get('b1');
		vm.b2 = $cookieStore.get('b2');
		vm.b3 = $cookieStore.get('b3');
		vm.x = $cookieStore.get('x');
		vm.y = $cookieStore.get('y');
		vm.result = $cookieStore.get('result');
	}


}
var module = angular.module('todoApp', []);

module.controller('todoController', function($scope) {
	//code

	$scope.categories = ["Detective", "Wetenschap", "Overig"];


	var localItems = JSON.parse(localStorage.getItem("items"));

	if(localItems != undefined && localItems.length>0) {
		$scope.items = localItems;
	}
	else {
		$scope.items = [
			{isbn:"14882665", titel: "Sherlock Holmes", categorie:"Detective", auteur: "Arthur Conan Doyle", beschrijving: "een spannend sherlock Holems Boek", prijs: 12.99},
			{isbn:"69483726", titel: "Alles over antimaterie", categorie:"Wetenschap", auteur: "Stephan Hawking", beschrijving: "Het universum van Stephen Hawking", prijs: 20.99},
			{isbn:"59382711", titel: "Guinnes book of Records", categorie:"Overig", auteur: "Guinnes inc.", beschrijving: "Alle records in een boek!", prijs: 40.49},
			{isbn:"95698327", titel: "test", categorie:"test", auteur: "test", beschrijving: "test", prijs: 10.00}
		];
	}

	$scope.deleteItem = function(item) {

		var deleteIndex = -1;
		$scope.items.forEach(function(e, i) {
			if(e.name === item.name) {
				deleteIndex = i;
			}
		});

		$scope.items.splice(deleteIndex, 1);

		localStorage.setItem("items", JSON.stringify($scope.items));
	};

	$scope.saveNewItem = function() {
		console.log($scope.newItem);

		$scope.items.push({
			name: $scope.newItem.name,
			category: $scope.newItem.category,
		});

		$scope.newItem = {};

		localStorage.setItem("items", JSON.stringify($scope.items));
	};

	$scope.updateItem = function(item) {
		item.updating=false;

		localStorage.setItem("items", JSON.stringify($scope.items));
	};



});
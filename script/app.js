var module = angular.module('todoApp', []);

module.controller('todoController', function($scope) {

	$scope.categories = ["Fantasy", "Sci-Fi", "Horror", "School", "Jeugd", "Wetenschap"];


	var localBooks = JSON.parse(localStorage.getItem("books"));

	if(localBooks != undefined && localBooks.length > 0) {
		$scope.books = localBooks;
	}
	else {
		$scope.books = [
			{ISBN:"59583726" , name:"Lord of the Rings", category:"Fantasy", author: "J.R.R Tolkien", description: "Een van de meest verkochte fantasy boeken aller tijden", price: "24.99"},
			{ISBN:"69483721" , name:"Sherlock Holmes, Hound of the Baskervilles", category:"Horror", author: "Arthur Conan Doyle", description: "Een klassieker van de schrijver achter sherlock holmes", price: "10.00"},
			{ISBN:"79381212" , name:"Stephen Hawkins'universum", category:"Wetenschap", author: "Stephen Hawking", description: "Alles wat je kan weten over wormgaten", price: "12.99"},
		];
	}

	$scope.deleteItem = function(book) {

		var deleteIndex = -1;
		$scope.items.forEach(function(e, i) {
			if(e.name === item.name) {
				deleteIndex = i;
			}
		});

		$scope.items.splice(deleteIndex, 1);

		localStorage.setItem("books", JSON.stringify($scope.items));
	};

	$scope.saveNewItem = function() {
		console.log($scope.newItem);

		$scope.items.push({
			name: $scope.newItem.name,
			category: $scope.newItem.category,
			checked: false
		});

		$scope.newItem = {};

		localStorage.setItem("books", JSON.stringify($scope.items));
	};

	$scope.updateItem = function(item) {
		item.updating=false;

		localStorage.setItem("books", JSON.stringify($scope.items));
	};



});
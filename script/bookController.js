bookApp.controller('bookController', function($scope) {
	//code

	$scope.categories = ["Detective", "Wetenschap", "Overig", "Zelfhulp", "School", "Roman", "Sci-fi", "Fantasy", "Kinder", "Romantiek", "Literatuur", "Nieuws", "Kunst"];


	var localItems = JSON.parse(localStorage.getItem("items"));
	//Met stringyfy krijg je de error duplicates in array.
	//Met parse krijg je geen error maar dan kan je geen boeken opslaan.

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
			}	//zoek het nummer op en verwijder hem uit de index
		});

		$scope.items.splice(deleteIndex, 1);

		localStorage.setItem("items", JSON.parse($scope.items)); //hierna opnieuw lezen
	};

	$scope.saveNewItem = function() {
		console.log($scope.newItem);

		$scope.items.push({
			isbn: $scope.newItem.isbn, //sla de gegevens op
			titel: $scope.newItem.titel,
			categorie: $scope.newItem.categorie,
			auteur: $scope.newItem.auteur,
			beschrijving: $scope.newItem.beschrijving,
			prijs: $scope.newItem.prijs,
		});

		$scope.newItem = {};

		localStorage.setItem("items", JSON.parse($scope.items)); //laadt het in de array
	};

	$scope.updateItem = function(item) {
		item.updating=false; //verander de status van het update veld

		localStorage.setItem("items", JSON.parse($scope.items));
	};



});
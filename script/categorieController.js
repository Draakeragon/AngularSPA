bookApp.controller('categorieController', function ($scope) {

    var localItems = JSON.parse(localStorage.getItem("categorie"));

    if (localItems != undefined && localItems.length > 0) {
        $scope.categorie = localItems;
    } else {

        $scope.categorie = 
        [{ categorie: "Detective", code: "DTV" },
        { categorie: "Wetenschap", code: "WTNSCHP" }]
    };

    $scope.updateCategorie = function (item) {
        item.updating = false;
        localStorage.setItem("categorie", angular.toJson($scope.categorie));
    };

    $scope.saveNewCategorie = function () {

        var newCategorie = $scope.newCategorie.categorie;
        var newCode = $scope.newCategorie.code;

        if (newCategorie != null && newCode != null) {
            $scope.categorie.push({
                categorie: $scope.newCategorie.categorie,
                code: $scope.newCategorie.code
            });
            
            $scope.newCategorie = {};
            localStorage.setItem("categorie", angular.toJson($scope.categorie));
        };
    };
});
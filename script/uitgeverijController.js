bookApp.controller('uitgeverijController', function ($scope) {

    var localItems = JSON.parse(localStorage.getItem("uitgeverij"));

    if (localItems != undefined && localItems.length > 0) {
        $scope.uitgeverij = localItems;
    } else {

        $scope.uitgeverij = 
        [{ uitgeverij: "FASA", locatie: "Amerika" },
        { uitgeverij: "Bruna", locatie: "Utrecht" }]
    };

    $scope.updateUitgeverij = function (item) {
        item.updating = false;
        localStorage.setItem("uitgeverij", angular.toJson($scope.uitgeverij));
    };

    $scope.saveNewUitgeverij = function () {

        var newUitgeverij = $scope.newUitgeverij.uitgeverij;
        var newLocatie = $scope.newUitgeverij.locatie;

        if (newUitgeverij != null && newLocatie != null) {
            $scope.uitgeverij.push({
                uitgeverij: $scope.newUitgeverij.uitgeverij,
                locatie: $scope.newUitgeverij.locatie
            });
            $scope.newUitgeverij = {};
            localStorage.setItem("uitgeverij", angular.toJson($scope.uitgeverij));
        };
    };
});
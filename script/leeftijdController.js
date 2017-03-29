bookApp.controller('leeftijdController', function ($scope) {

    var localItems = JSON.parse(localStorage.getItem("leeftijd"));

    if (localItems != undefined && localItems.length > 0) {
        $scope.leeftijd = localItems;
    } else {

        $scope.leeftijd = 
        [{ leeftijd: "Volwassenen", uitleg: "16 - 18" },
        { leeftijd: "Kinderen", uitleg: "10 - 16" }]
    };

    $scope.updateLeeftijd = function (item) {
        item.updating = false;
        localStorage.setItem("leeftijd", angular.toJson($scope.leeftijd));
    };

    $scope.saveNewLeeftijd = function () {
        
        var newLeeftijd = $scope.newLeeftijd.leeftijd;
        var newUitleg = $scope.newLeeftijd.uitleg;

        if (newLeeftijd != null && newUitleg != null) {
            $scope.leeftijd.push({
                leeftijd: $scope.newLeeftijd.leeftijd,
                uitleg: $scope.newLeeftijd.uitleg
            });
            $scope.newLeeftijd = {};
            localStorage.setItem("leeftijd", angular.toJson($scope.leeftijd));
        };
    };
});
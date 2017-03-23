bookApp.controller("logincontroller", function($scope, UserService) {
    console.log("logincontroller");

    $scope.loggedIn = false;
    console.log($scope.loggedIn);

    $scope.login = function() {
        console.log($scope.user.username, $scope.user.password);
        if(UserService.login($scope.user.username, $scope.user.password) !== false) {
            $scope.loggedIn = true;
            
        }
         
    };

});
bookApp.controller("logincontroller", function($scope, UserService) {
//gebruikt userservice als dependency
    $scope.loggedIn = false;
    //je begint als niet ingelogd
    $scope.login = function() {
        if(UserService.login($scope.user.username, $scope.user.password) !== false) {
            $scope.loggedIn = true; //als je username + Wachtwoord combinatie voorkomen in de Userservice
            //dan ben je ingelogd (boolean)
        }
         
    };

});
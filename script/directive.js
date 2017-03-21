var app = angular.module("bookApp", []);
app.directive("TestDirective", function() {
    return {
        restrict : "A",
        template : "<h1>Made by a directive!</h1>"
    };
});
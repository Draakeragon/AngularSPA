var app = angular.module("bookApp", []);
app.directive("testDirective", function() {
    return {
        restrict : "A",
        template : "<h1>Made by a directive!</h1>"
    };
});
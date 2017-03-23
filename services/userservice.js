bookApp.service('UserService', function() {
    var users = [
        {id:1, username:"admin", password:"admin"},
        {id:2, username:"test", password:"test"},
    ];

    this.login = function(username, password) {
        console.log("login");
        var res = false;
        users.forEach(function(item) {
            if(item.username === username && item.password === password) {
                res = true;
            }
        });
        return res;
    };
});
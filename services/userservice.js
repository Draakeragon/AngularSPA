bookApp.service('UserService', function() {
    var users = [ //Externe service
        {id:1, username:"admin", password:"admin"},
        {id:2, username:"test", password:"test"}, //geldige combinaties
    ];

    this.login = function(username, password) { //ALs je op de login drukt geef je een wachtwoord en een gebruikersnaam
        console.log("login");//print naar de console
        var res = false;  //resultaat is standaard false
        users.forEach(function(item) { //Ga alle geldige combinaties af
            if(item.username === username && item.password === password) {
                res = true; //als het goed is return je true
            }
        });
        return res; //return altijd het resultaat
    };
});
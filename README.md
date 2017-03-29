Dit is de Repo van de SPA van Adriaan van den Berg 14062070
Om de tests op te starten

cd C:\Users\Draakeragon\Documents\HHS\Informatica 2de jaar\Blok H\Bouwen\Project\inf-z-spa\tests
(Map waarin het project zit)
karma start karma.conf.js


Om offline te runnen.

Ctrl + Shift + B
Configure task runner (onderste optie)

Vervang code met: 

{
    "version": "0.1.0",
    "command": "Chrome",
    "windows": {
        "command": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
    },
    "args": ["${file}"]
}

Om het programma te runne via de server.
cd /pad vna je folder / http-server  via administrator opdrachtprompt
Daarna in de browser localhost:8080

nodig voor routing!

Chrome Network disable cache

http-server (start de localhost)
NPM start (start de webserver)
Webdriver � manager start (start selenium )
Protractor conf.js (start protractor.)
4 commandoprompts nodig. 
Gebruik geen administrator

Inleveren, Screenshots van alle pagina's inleveren.


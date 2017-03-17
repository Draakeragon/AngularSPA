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


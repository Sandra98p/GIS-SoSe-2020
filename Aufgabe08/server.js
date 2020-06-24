"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    console.log("Starting server"); //Server wird gestartet und in der Konsole ausgegeben
    let port = Number(process.env.PORT); //Port erstellen
    if (!port) //Port ist nicht vorhanden bzw. nicht gefunden, dann ...
        port = 8100; //...setze ihn auf den Wert 8100
    //Variable server wird erstellt
    let server = Http.createServer();
    server.addListener("request", handleRequest); //Listener erstellen und zuweisen
    server.addListener("listening", handleListen); //Listener erstellen und zuweisen
    server.listen(port);
    function handleListen() {
        console.log("Listening"); //Konsolenausgabe
    }
    //Funktion erzeugen, "I hear voices" wird in der Konsole ausgegeben
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        //Kopf und Parameter erstellen
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Zeichencodierung wird angegeben, Typ = text/html
        _response.setHeader("Access-Control-Allow-Origin", "*"); //gibt an, ob die Antwort mit dem angeforderten Code vom angegebenen Ursprung geteilt werden kann
        //Serverantwort url
        _response.write(_request.url);
        //Ende der Nachricht
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map
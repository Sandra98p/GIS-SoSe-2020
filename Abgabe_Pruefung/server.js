"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PruefungsaufgabeServer = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var PruefungsaufgabeServer;
(function (PruefungsaufgabeServer) {
    console.log("Starting server");
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb+srv://Sandra:<password>@sandra.hyxse.mongodb.net/<dbname>?retryWrites=true&w=majority";
    starteServer(port);
    verbindeDatabase(databaseUrl);
    function starteServer(_port) {
        let server = Http.createServer(); //createServer liefert Http.Server und ergebnis wird in Variable server gespeichert
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    async function verbindeDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("IceCream").collection("bestellungen");
        console.log("Verbindung zur Datenbank" + orders != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("Willkommen beim Eisverkauf");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); //legt fest von wem die anfragen kommen, * bedeutet alles
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/send") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br>");
                }
            }
            if (url.pathname == "/get") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
})(PruefungsaufgabeServer = exports.PruefungsaufgabeServer || (exports.PruefungsaufgabeServer = {}));
//# sourceMappingURL=server.js.map
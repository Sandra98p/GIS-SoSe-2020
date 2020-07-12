"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A11Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var A11Server;
(function (A11Server) {
    console.log("Starting server");
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb+srv://Sandra:<password>@sandra.hyxse.mongodb.net/<dbname>?retryWrites=true&w=majority";
    starteServer(port);
    verbindeDatabase(databaseUrl);
    function starteServer(_port) {
        let server = Http.createServer(); //erstellen einer Server Variablen
        console.log("server starting, port:" + _port);
        server.addListener("request", handleRequest); //hinzufügen eines handler 
        server.addListener("listening", handleListen);
        server.listen(_port); //server schaut ob anfragen bei port sind und hört zu
    }
    async function verbindeDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Test").collection("Students");
        console.log("Verbindung zur Datenbank" + orders != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("Hallöchen");
        //Zwei header setzen
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); //legt fest von wem die anfragen kommen, * bedeutet alles
        if (_request.url) {
            let url2 = Url.parse(_request.url, true);
            let path = url2.pathname;
            if (path == "/send") {
                await handleSend(url2);
            }
            else if (path == "/get") {
                await handleGet(_response);
            }
        }
        _response.end();
    }
    async function handleSend(_url) {
        console.log("Mongo bekommt die Daten gesendet");
        console.log(_url.query);
        orders.insertOne(_url.query);
    }
    async function handleGet(_response) {
        let ordersArray = await orders.find().toArray();
        _response.write(JSON.stringify(ordersArray));
    }
})(A11Server = exports.A11Server || (exports.A11Server = {}));
//# sourceMappingURL=server.js.map
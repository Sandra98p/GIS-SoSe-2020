import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace PruefungsaufgabeServer {
    console.log("Starting server");

    let orders: Mongo.Collection;
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let databaseUrl: string = "mongodb+srv://Sandra:<password>@sandra.hyxse.mongodb.net/<dbname>?retryWrites=true&w=majority";

    starteServer(port);
    verbindeDatabase(databaseUrl);

    function starteServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();  //createServer liefert Http.Server und ergebnis wird in Variable server gespeichert
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }

    async function verbindeDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("IceCream").collection("bestellungen");
        console.log("Verbindung zur Datenbank" + orders != undefined);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Willkommen beim Eisverkauf");
        
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");  //legt fest von wem die anfragen kommen, * bedeutet alles

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
          
            if (url.pathname == "/send") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br>");
                }
              
            }

            if (url.pathname == "/get") {

                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        _response.end();
    }

}
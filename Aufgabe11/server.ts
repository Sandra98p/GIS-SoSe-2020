import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace A11Server {
    console.log("Starting server");

    interface Orders {
        [type: string]: string[] | undefined;
    }

    let orders: Mongo.Collection;
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let databaseUrl: string = "mongodb+srv://Sandra:<password>@sandra.hyxse.mongodb.net/<dbname>?retryWrites=true&w=majority";

    starteServer(port);
    verbindeDatabase(databaseUrl);

    function starteServer(_port: number | string): void {

        let server: Http.Server = Http.createServer();  //erstellen einer Server Variablen
        console.log("server starting, port:" + _port);
        server.addListener("request", handleRequest);  //hinzufügen eines handler 
        server.addListener("listening", handleListen);
        server.listen(_port);   //server schaut ob anfragen bei port sind und hört zu

    }

    async function verbindeDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Test").collection("Students");
        console.log("Verbindung zur Datenbank" + orders != undefined);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> { //bei async funktion immer promise vor void
        console.log("Hallöchen");
        //Zwei header setzen
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");  //legt fest von wem die anfragen kommen, * bedeutet alles

        if (_request.url) {
            let url2: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string | null = url2.pathname;
            if (path == "/send") {
                await handleSend(url2);
            }
            else if (path == "/get") {
                await handleGet(_response);
            }
        }

        _response.end();
    }

    async function handleSend(_url: Url.UrlWithParsedQuery): Promise<void> {
        console.log("Mongo bekommt die Daten gesendet");
        console.log(_url.query);
        orders.insertOne(_url.query);
    }
    async function handleGet(_response: Http.ServerResponse): Promise<void> {
        let ordersArray: Orders[] = await orders.find().toArray();
        _response.write(JSON.stringify(ordersArray));
    }

}
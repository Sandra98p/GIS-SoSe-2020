import * as Http from "http";

export namespace A08Server {
    console.log("Starting server");     //Server wird gestartet und in der Konsole ausgegeben
    let port: number = Number(process.env.PORT);    //Port erstellen
    if (!port)      //Port ist nicht vorhanden bzw. nicht gefunden, dann ...
        port = 8100;    //...setze ihn auf den Wert 8100

    //Variable server wird erstellt
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);   //Listener erstellen und zuweisen
    server.addListener("listening", handleListen);  //Listener erstellen und zuweisen
    server.listen(port);

    function handleListen(): void {     //Server hört zu, Aufrufe wahrgenommen
        console.log("Listening");       //Konsolenausgabe
    }

    //Funktion erzeugen, "I hear voices" wird in der Konsole ausgegeben
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        //Kopf und Parameter erstellen
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        //Serverantwort url
        _response.write(_request.url);

        //Ende der Nachricht
        _response.end();
    }
}
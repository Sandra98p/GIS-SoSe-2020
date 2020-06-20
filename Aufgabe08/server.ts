import * as Http from "http";

export namespace A08Server {
    console.log("Starting server");     //Server wird gestartet
    let port: number = Number(process.env.PORT);
    if (!port)      //Port ist nicht vorhanden bzw. nicht gefunden, dann ...
        port = 8100;    //setze ihn auf den Wert 8100

    //Variable wird erstellt
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {     //Server hört zu
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write(_request.url);

        _response.end();
    }
}
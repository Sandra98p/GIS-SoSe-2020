namespace Aufgabe09 {
    let htmlButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("html");
    htmlButton.addEventListener("click", htmlhandle);

    let jsonButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("json");
    jsonButton.addEventListener("click", jsonhandle);

    let responseServer: HTMLElement = <HTMLElement>document.getElementById("responseServer");

    async function htmlhandle(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gistestsose2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html" + "?" + query.toString();
        
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        responseServer.innerHTML = responseString;
        
    }

    async function jsonhandle(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gistestsose2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json" + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseString: string = await response.json();
        console.log(responseString); 
        let responseJson: JSON = JSON.parse(responseString);
        console.log(responseJson);
      
        responseServer.innerHTML = responseString;
        console.log(responseServer);
    }
}
namespace Aufgabe09 {
    let htmlButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("html");
    htmlButton.addEventListener("click", htmlhandle);

    let jsonButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("json");
    jsonButton.addEventListener("click", jsonhandle);


    async function htmlhandle(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gistestsose2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html" + "?" + query.toString();
        
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        let responseServer: HTMLElement = <HTMLElement> document.getElementById("responseServer");
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

    }
}
namespace Aufgabe11 {
    let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    sendButton.addEventListener("click", sendhandle);

    let getButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
    getButton.addEventListener("click", gethandle);

    let responseServer: HTMLElement = <HTMLElement>document.getElementById("responseServer");

    async function sendhandle(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gistestsose2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/send" + "?" + query.toString();
        
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        responseServer.innerHTML = responseString;
        
    }

    async function gethandle(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gistestsose2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/get" + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseString: string = await response.json();
        console.log(responseString); 
        let responseJson: JSON = JSON.parse(responseString);
        console.log(responseJson);
      
        responseServer.innerHTML = responseString;
        console.log(responseServer);
    }
}
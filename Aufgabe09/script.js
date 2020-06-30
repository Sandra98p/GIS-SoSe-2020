"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let htmlButton = document.getElementById("html");
    htmlButton.addEventListener("click", htmlhandle);
    let jsonButton = document.getElementById("json");
    jsonButton.addEventListener("click", jsonhandle);
    let responseServer = document.getElementById("responseServer");
    async function htmlhandle() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gistestsose2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/html" + "?" + query.toString();
        let response = await fetch(url);
        let responseString = await response.text();
        responseServer.innerHTML = responseString;
    }
    async function jsonhandle() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gistestsose2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/json" + "?" + query.toString();
        let response = await fetch(url);
        let responseString = await response.json();
        console.log(responseString);
        let responseJson = JSON.parse(responseString);
        console.log(responseJson);
        responseServer.innerHTML = responseString;
        console.log(responseServer);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map
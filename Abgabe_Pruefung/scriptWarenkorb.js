"use strict";
var IceCreamTime;
(function (IceCreamTime) {
    window.addEventListener("load", init);
    let inhaltsDiv;
    let loeschewarenkorb;
    let anzeigeGesamtpreis;
    let gesamtpreis;
    let sendeButton = document.getElementById("bestellenbutton");
    sendeButton.addEventListener("click", sendeBestellung);
    function init(_event) {
        inhaltsDiv = document.querySelector(".bestellungsAnzeige");
        anzeigeGesamtpreis = document.querySelector("#preisinsgesamt");
        loeschewarenkorb = document.querySelector("#allesloeschen");
        loeschewarenkorb.addEventListener("click", handleRemoveAll);
        console.log(localStorage);
        update();
    }
    function update() {
        inhaltsDiv.innerHTML = "";
        gesamtpreis = 0;
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let artikelJson = localStorage.getItem(key);
            let item = JSON.parse(artikelJson);
            gesamtpreis += item.preis;
            createContent(item);
        }
        setGesamtpreis();
    }
    function createContent(_inputArticle) {
        //erstelle Div
        let newDiv = document.createElement("div");
        inhaltsDiv.appendChild(newDiv);
        newDiv.id = _inputArticle.name;
        console.log(newDiv.id);
        //Bild erstellen
        let bildElement = document.createElement("img");
        bildElement.src = _inputArticle.bild;
        newDiv.appendChild(bildElement);
        console.log(bildElement);
        //Namen geben
        let name = document.createElement("p");
        name.innerHTML = _inputArticle.name;
        newDiv.appendChild(name);
        //Preis festlegen
        let preisDiv = document.createElement("p");
        preisDiv.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", preisDiv.innerHTML);
        newDiv.appendChild(preisDiv);
        //Button
        let loeschen = document.createElement("button");
        loeschen.innerHTML = "Löschen";
        newDiv.appendChild(loeschen);
        loeschen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.name);
        update();
    }
    //Gesamtpreis in Header plazieren
    function setGesamtpreis() {
        anzeigeGesamtpreis.innerHTML = "" + gesamtpreis.toFixed(2) + "€";
    }
    //Lösche alle Artikel
    function handleRemoveAll(_event) {
        localStorage.clear();
        update();
    }
    async function sendeBestellung() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gistestsose2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }
})(IceCreamTime || (IceCreamTime = {}));
//# sourceMappingURL=scriptWarenkorb.js.map
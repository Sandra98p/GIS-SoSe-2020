"use strict";
var Artikel;
(function (Artikel) {
    window.addEventListener("load", init);
    let contentDiv;
    let pGesamtpreis;
    let gesamtPreis;
    function init(_event) {
        contentDiv = document.querySelector(".warenliste");
        pGesamtpreis = document.querySelector("#total");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        console.log(localStorage);
        update();
    }
    function update() {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let articleJson = localStorage.getItem(key);
            let item = JSON.parse(articleJson);
            gesamtPreis += item.preis;
            erstelleInhalt(item);
        }
        setGesamtpreis();
    }
    function erstelleInhalt(_inputArticle) {
        //Div erstellen
        let newDiv = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputArticle.name;
        console.log(newDiv.id);
        //Bild erstellen
        let bildElement = document.createElement("img");
        bildElement.src = _inputArticle.bild;
        newDiv.appendChild(bildElement);
        console.log(bildElement);
        //Namen geben
        let name = document.createElement("h3");
        name.innerHTML = _inputArticle.name;
        newDiv.appendChild(name);
        //Preis festlegen
        let price = document.createElement("p");
        price.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);
        //Button
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.name);
        update();
    }
    //Gesamtpreis in Header plazieren
    function setGesamtpreis() {
        pGesamtpreis.innerHTML = "" + gesamtPreis;
    }
    function handleRemoveAll(_event) {
        localStorage.clear();
        update();
    }
})(Artikel || (Artikel = {}));
//# sourceMappingURL=warenkorb.js.map
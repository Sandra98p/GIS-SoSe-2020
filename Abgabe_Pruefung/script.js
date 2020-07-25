"use strict";
var IceCreamTime;
(function (IceCreamTime) {
    let warenanzahl = 0;
    let preisrechner = 0;
    //Zähler für die Anzahl erstellen
    let auswahlAnzeige = document.createElement("p");
    //Produktzähler in grauem Feld hinzufügen
    let kaufeAnzeige = document.createElement("div");
    kaufeAnzeige.id = "kaufeAnzeige";
    let inhaltsDiv;
    let items = [];
    window.addEventListener("load", init);
    //Json Daten werden vom Server gezogen
    function init() {
        let url = "artikel.json";
        communicate(url);
    }
    async function communicate(_url) {
        console.log("Willkommen beim Eis-Verkauf");
        let response = await fetch(_url);
        console.log("Response", response);
        items = await response.json();
        console.log("End");
        buildArticles();
    }
    function saveinlocalstorage(_inputArticle) {
        //Artikel bauen
        let itemString = JSON.stringify(_inputArticle);
        let key = "" + _inputArticle.name; //in localstorage packen
        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }
    //Produktschleife
    function buildArticles() {
        for (let index = 0; index < items.length; index++) {
            console.log(items[index]);
            //Div erzeugen
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "artikel");
            newDiv.setAttribute("id", "produkt" + index);
            document.getElementById("eissorten")?.appendChild(newDiv);
            //Produktbild hinzufügen
            let newBild = document.createElement("img");
            newBild.setAttribute("src", items[index].bild);
            newBild.setAttribute("alt", "produkt");
            newBild.setAttribute("class", "produktbild");
            document.getElementById("produkt" + index)?.appendChild(newBild);
            //Produktbezeichnung hinzufügen
            let newH3 = document.createElement("h3");
            newH3.innerHTML = items[index].name;
            document.getElementById("produkt" + index)?.appendChild(newH3);
            //Preis hinzufügen
            let newPreis = document.createElement("p");
            newPreis.innerHTML = items[index].preis.toFixed(2) + "€";
            document.getElementById("produkt" + index)?.appendChild(newPreis);
            //Button für warenkorb hinzufügen
            let newButton = document.createElement("button");
            newButton.innerHTML = "Auswahl";
            newButton.addEventListener("click", kaufenButton.bind(items[index]));
            newButton.setAttribute("name", items[index].name);
            newButton.setAttribute("img", items[index].bild);
            newButton.setAttribute("preis", items[index].preis.toString());
            newButton.setAttribute("kategorie", items[index].kategorie);
            document.getElementById("produkt" + index)?.appendChild(newButton);
            document.getElementById("artikel" + index)?.appendChild(newButton);
            switch (items[index].kategorie) {
                case "eissorten":
                    let getContainerEissorten = document.getElementById("eissorten");
                    getContainerEissorten.appendChild(newDiv);
                    break;
                case "verpackung":
                    let getContainerVerpackung = document.getElementById("verpackung");
                    getContainerVerpackung.appendChild(newDiv);
                    break;
                case "extras":
                    let getContainerExtras = document.getElementById("extras");
                    getContainerExtras.appendChild(newDiv);
                    break;
            }
        }
        function kaufenButton(_event) {
            warenanzahl++;
            console.log(warenanzahl);
            saveinlocalstorage(this);
            preisrechner += this.preis;
            console.log(preisrechner.toFixed(2));
            //Blase erstellen bei min. 1 Artikel
            if (warenanzahl >= 0) {
                document.getElementById("kaufeProdukt")?.appendChild(kaufeAnzeige);
            }
            //Zahl in Blase anzeigen
            auswahlAnzeige.innerHTML = "" + warenanzahl;
            document.getElementById("kaufeAnzeige")?.appendChild(auswahlAnzeige);
        }
        //Kategorien einblenden/ausblenden
        function handleCategoryClick(_click) {
            switch (this.getAttribute("id")) {
                case "eissortenbtn":
                    eissorten();
                    break;
                case "verpackungbtn":
                    verpackung();
                    break;
                case "extrasbtn":
                    extras();
                    break;
            }
        }
        function eissorten() {
            document.getElementById("eissorten").style.display = "inline-grid";
            document.getElementById("verpackung").style.display = "none";
            document.getElementById("extras").style.display = "none";
        }
        function verpackung() {
            document.getElementById("verpackung").style.display = "inline-grid";
            document.getElementById("eissorten").style.display = "none";
            document.getElementById("extras").style.display = "none";
        }
        function extras() {
            document.getElementById("extras").style.display = "inline-grid";
            document.getElementById("eissorten").style.display = "none";
            document.getElementById("verpackung").style.display = "none";
        }
        //Erstellen einer Variable, Buttonverlinkung
        let eissortenButton = document.getElementById("eissortenbtn");
        eissortenButton.addEventListener("click", handleCategoryClick.bind(eissortenButton));
        let weißweinButton = document.getElementById("verpackungbtn");
        weißweinButton.addEventListener("click", handleCategoryClick.bind(weißweinButton));
        let roseButton = document.getElementById("extrasbtn");
        roseButton.addEventListener("click", handleCategoryClick.bind(roseButton));
    }
})(IceCreamTime || (IceCreamTime = {}));
//# sourceMappingURL=script.js.map
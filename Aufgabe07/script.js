"use strict";
var Artikel;
(function (Artikel) {
    window.addEventListener("load", init);
    let articles = [];
    function init(_event) {
        communicate("articles.json");
        buildNavListener();
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        articles = await response.json();
        buildArticles(articles);
        console.log("Response", response);
    }
    function buildArticles(_articles) {
        for (let index = 0; index < _articles.length; index++) {
            console.log(_articles[index]);
            //Div erzeugen
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "artikel");
            newDiv.setAttribute("id", "produkt" + index);
            document.getElementById("inneneinrichtung")?.appendChild(newDiv);
            //Produktbild hinzufügen
            let newBild = document.createElement("img");
            newBild.setAttribute("src", _articles[index].bild);
            newBild.setAttribute("alt", "produkt");
            newBild.setAttribute("class", "produktbild");
            document.getElementById("produkt" + index)?.appendChild(newBild);
            //Produktbezeichnung hinzufügen
            let newH3 = document.createElement("h3");
            newH3.innerHTML = _articles[index].name;
            document.getElementById("produkt" + index)?.appendChild(newH3);
            //Produktbeschreibung hinzufügen
            let newP = document.createElement("p");
            newP.innerHTML = _articles[index].beschreibung;
            document.getElementById("produkt" + index)?.appendChild(newP);
            //Preis hinzufügen
            let newPreis = document.createElement("h4");
            newPreis.innerHTML = _articles[index].preis + "€";
            document.getElementById("produkt" + index)?.appendChild(newPreis);
            //Button hinzufügen
            let newButton = document.createElement("button");
            newButton.innerHTML = "Jetzt kaufen";
            newButton.addEventListener("click", einkaufenBtn);
            newButton.setAttribute("preis", _articles[index].preis.toString());
            document.getElementById("produkt" + index)?.appendChild(newButton);
            switch (_articles[index].kategorie) {
                case "inneneinrichtung":
                    let getContainerInneneinrichtung = document.getElementById("inneneinrichtung");
                    console.log(getContainerInneneinrichtung);
                    getContainerInneneinrichtung.appendChild(newDiv);
                    break;
                case "außeneinrichtung":
                    let getContainerAußeneinrichtung = document.getElementById("außeneinrichtung");
                    getContainerAußeneinrichtung.appendChild(newDiv);
                    break;
            }
        }
    }
    let artikelrechner = 0;
    let preis = 0;
    //Zähler für die Anzahl erstellen
    let anzahlZaehler = document.createElement("p");
    //Blase erstellen beim Einkaufswagen
    let produktAnzeige = document.createElement("div");
    produktAnzeige.id = "produktAnzeige";
    function einkaufenBtn(_event) {
        artikelrechner++;
        console.log(artikelrechner);
        preis += parseFloat(_event.target?.getAttribute("preis"));
        console.log(preis);
        //Blase erstellen bei min. 1 Artikel
        if (artikelrechner >= 0) {
            document.getElementById("produktBlase")?.appendChild(produktAnzeige);
        }
        //Zahl in Blase anzeigen
        anzahlZaehler.innerHTML = "" + artikelrechner;
        document.getElementById("produktAnzeige")?.appendChild(anzahlZaehler);
    }
    //Kategorien einblenden/ausblenden
    function handleCategoryClick(_click) {
        switch (this.getAttribute("id")) {
            case "inneneinrichtungbtn":
                inneneinrichtungVerweis();
                break;
            case "außeneinrichtungbtn":
                außeneinrichtungVerweis();
                break;
        }
        function inneneinrichtungVerweis() {
            document.getElementById("inneneinrichtung").style.display = "inline-grid";
            document.getElementById("außeneinrichtung").style.display = "none";
        }
        function außeneinrichtungVerweis() {
            document.getElementById("außeneinrichtung").style.display = "inline-grid";
            document.getElementById("inneneinrichtung").style.display = "none";
        }
    }
    function buildNavListener() {
        //Erstellen einer Variable, Buttonverlinkung
        let inneneinrichtungButton = document.querySelector("#inneneinrichtungbtn");
        inneneinrichtungButton.addEventListener("click", handleCategoryClick.bind(inneneinrichtungButton));
        let außeneinrichtungButton = document.querySelector("#außeneinrichtungbtn");
        außeneinrichtungButton.addEventListener("click", handleCategoryClick.bind(außeneinrichtungButton));
    }
})(Artikel || (Artikel = {}));
//# sourceMappingURL=script.js.map
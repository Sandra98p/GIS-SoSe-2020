"use strict";
console.log("Hallo");
//Inneneinrichtung-Fotohalter
//Produkte definieren
var Inneneinrichtung;
(function (Inneneinrichtung) {
    //Produkte auflisten
    let fotohalter1 = {
        bild: "produktbilder/fotohalter.jpg",
        name: "Fotohalter",
        beschreibung: "3 Betonhalter mit Klipper, für Fotos, Karten, etc.",
        preis: "12.99€"
    };
    let fotohalter2 = {
        bild: "produktbilder/fotohalter_kleiderbuegel.jpg",
        name: "Fotohalter-Kleiderbügel",
        beschreibung: "6 Kleiderbügel, Farbe: silber, Wandschrauben nicht enthalten",
        preis: "20.50€"
    };
    let fotohalter3 = {
        bild: "produktbilder/fotohalter_love.jpg",
        name: "Fotohalter-Love",
        beschreibung: "Buchstaben aus Beton, 8 Drähte für die Fotos enthalten",
        preis: "14.99€"
    };
    //Array erstellen, in dem alle Produkte aufgelistet sind
    let inneneinrichtungProdukte = [fotohalter1, fotohalter2, fotohalter3];
    for (let index = 0; index < inneneinrichtungProdukte.length; index++) {
        //Div erzeugen
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "inneneinrichtung-div");
        newDiv.setAttribute("id", "inneneinrichtung-produkt" + index);
        document.getElementById("inneneinrichtung")?.appendChild(newDiv);
        //Produktbild hinzufügen
        let newBild = document.createElement("img");
        newBild.setAttribute("src", inneneinrichtungProdukte[index].bild);
        newBild.setAttribute("alt", "inneneinrichtung-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("inneneinrichtung-produkt" + index)?.appendChild(newBild);
        //Produktbezeichnung hinzufügen
        let newH3 = document.createElement("h3");
        newH3.innerHTML = inneneinrichtungProdukte[index].name;
        document.getElementById("inneneinrichtung-produkt" + index)?.appendChild(newH3);
        //Produkt_beschreibung hinzufügen
        let newP = document.createElement("p");
        newP.innerHTML = inneneinrichtungProdukte[index].beschreibung;
        document.getElementById("inneneinrichtung-produkt" + index)?.appendChild(newP);
        // _preis hinzufügen
        let newPreis = document.createElement("h4");
        newPreis.innerHTML = inneneinrichtungProdukte[index].preis + "€";
        document.getElementById("inneneinrichtung-produkt" + index)?.appendChild(newPreis);
        //Button hinzufügen
        let newButton = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("inneneinrichtung-produkt" + index)?.appendChild(newButton);
    }
})(Inneneinrichtung || (Inneneinrichtung = {}));
//Inneneinrichtung-Holzgegenstände
var Inneneinrichtung2;
(function (Inneneinrichtung2) {
    let holzgegenstaende1 = {
        bild: "produktbilder/holz_aufsteller.jpg",
        name: "Aufsteller",
        beschreibung: "Aufsteller aus Holz für kleine Pflanzen",
        preis: "12.99€"
    };
    let holzgegenstaende2 = {
        bild: "produktbilder/holz_haenger.jpg",
        name: "Hänger",
        beschreibung: "1 Holzscheibe mit 3 Schnüren, Ablage für Blumen, Karten, etc.",
        preis: "20.50€"
    };
    let holzgegenstaende3 = {
        bild: "produktbilder/holz_sofatablett.jpg",
        name: "Sofatablett",
        beschreibung: "Tablett zur Ablage von Fernbedienung, Zeitschrift, etc.",
        preis: "14.99€"
    };
    let inneneinrichtung2Produkte = [holzgegenstaende1, holzgegenstaende2, holzgegenstaende3];
    for (let index = 0; index < inneneinrichtung2Produkte.length; index++) {
        //Div erzeugen
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "inneneinrichtung2-div");
        newDiv.setAttribute("id", "inneneinrichtung2-produkt" + index);
        document.getElementById("inneneinrichtung2")?.appendChild(newDiv);
        //Produktbild hinzufügen
        let newBild = document.createElement("img");
        newBild.setAttribute("src", inneneinrichtung2Produkte[index].bild);
        newBild.setAttribute("alt", "inneneinrichtung2-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("inneneinrichtung2-produkt" + index)?.appendChild(newBild);
        //Produktbezeichnung hinzufügen
        let newH3 = document.createElement("h3");
        newH3.innerHTML = inneneinrichtung2Produkte[index].name;
        document.getElementById("inneneinrichtung2-produkt" + index)?.appendChild(newH3);
        //Produkt_beschreibung hinzufügen
        let newP = document.createElement("p");
        newP.innerHTML = inneneinrichtung2Produkte[index].beschreibung;
        document.getElementById("inneneinrichtung2-produkt" + index)?.appendChild(newP);
        // _preis hinzufügen
        let newPreis = document.createElement("h4");
        newPreis.innerHTML = inneneinrichtung2Produkte[index].preis + "€";
        document.getElementById("inneneinrichtung2-produkt" + index)?.appendChild(newPreis);
        //Button hinzufügen
        let newButton = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("inneneinrichtung2-produkt" + index)?.appendChild(newButton);
    }
})(Inneneinrichtung2 || (Inneneinrichtung2 = {}));
//Inneneinrichtung-Vasen
var Inneneinrichtung3;
(function (Inneneinrichtung3) {
    let vase1 = {
        bild: "produktbilder/vase_schrift.jpg",
        name: "Vase mit Schrift",
        beschreibung: "Tablett zur Ablage von Fernbedienung, Zeitschrift, etc.",
        preis: "14.99€"
    };
    let vase2 = {
        bild: "produktbilder/vase_reagenzglas.jpg",
        name: "Reagenzglas",
        beschreibung: "Tablett zur Ablage von Fernbedienung, Zeitschrift, etc.",
        preis: "14.99€"
    };
    let vase3 = {
        bild: "produktbilder/vase_papier.jpg",
        name: "Vase mit Papierhülle",
        beschreibung: "Tablett zur Ablage von Fernbedienung, Zeitschrift, etc.",
        preis: "14.99€"
    };
    let inneneinrichtung3Produkte = [vase1, vase2, vase3];
    for (let index = 0; index < inneneinrichtung3Produkte.length; index++) {
        //Div erzeugen
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "inneneinrichtung3-div");
        newDiv.setAttribute("id", "inneneinrichtung3-produkt" + index);
        document.getElementById("inneneinrichtung3")?.appendChild(newDiv);
        //Produktbild hinzufügen
        let newBild = document.createElement("img");
        newBild.setAttribute("src", inneneinrichtung3Produkte[index].bild);
        newBild.setAttribute("alt", "inneneinrichtung3-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("inneneinrichtung3-produkt" + index)?.appendChild(newBild);
        //Produktbezeichnung hinzufügen
        let newH3 = document.createElement("h3");
        newH3.innerHTML = inneneinrichtung3Produkte[index].name;
        document.getElementById("inneneinrichtung3-produkt" + index)?.appendChild(newH3);
        //Produkt_beschreibung hinzufügen
        let newP = document.createElement("p");
        newP.innerHTML = inneneinrichtung3Produkte[index].beschreibung;
        document.getElementById("inneneinrichtung3-produkt" + index)?.appendChild(newP);
        // _preis hinzufügen
        let newPreis = document.createElement("h4");
        newPreis.innerHTML = inneneinrichtung3Produkte[index].preis + "€";
        document.getElementById("inneneinrichtung3-produkt" + index)?.appendChild(newPreis);
        //Button hinzufügen
        let newButton = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("inneneinrichtung3-produkt" + index)?.appendChild(newButton);
    }
})(Inneneinrichtung3 || (Inneneinrichtung3 = {}));
//Inneneinrichtung-Wanddekoration
var Inneneinrichtung4;
(function (Inneneinrichtung4) {
    let wanddekoration1 = {
        bild: "produktbilder/wanddeko_rund.jpg",
        name: "Spiegel mit Holzstrahlen",
        beschreibung: "Spiegel mit Holzstrahlen, Spiegeldurchmesser: 30 cm",
        preis: "20.50€"
    };
    let wanddekoration2 = {
        bild: "produktbilder/wanddeko_regal.jpg",
        name: "Wandregal",
        beschreibung: "2 hängende Regale, Aufhänger: Ring, Länge anpassbar",
        preis: "15.50€"
    };
    let inneneinrichtung4Produkte = [wanddekoration1, wanddekoration2];
    for (let index = 0; index < inneneinrichtung4Produkte.length; index++) {
        //Div erzeugen
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "inneneinrichtung4-div");
        newDiv.setAttribute("id", "inneneinrichtung4-produkt" + index);
        document.getElementById("inneneinrichtung4")?.appendChild(newDiv);
        //Produktbild hinzufügen
        let newBild = document.createElement("img");
        newBild.setAttribute("src", inneneinrichtung4Produkte[index].bild);
        newBild.setAttribute("alt", "inneneinrichtung4-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("inneneinrichtung4-produkt" + index)?.appendChild(newBild);
        //Produktbezeichnung hinzufügen
        let newH3 = document.createElement("h3");
        newH3.innerHTML = inneneinrichtung4Produkte[index].name;
        document.getElementById("inneneinrichtung4-produkt" + index)?.appendChild(newH3);
        //Produkt_beschreibung hinzufügen
        let newP = document.createElement("p");
        newP.innerHTML = inneneinrichtung4Produkte[index].beschreibung;
        document.getElementById("inneneinrichtung4-produkt" + index)?.appendChild(newP);
        // _preis hinzufügen
        let newPreis = document.createElement("h4");
        newPreis.innerHTML = inneneinrichtung4Produkte[index].preis + "€";
        document.getElementById("inneneinrichtung4-produkt" + index)?.appendChild(newPreis);
        //Button hinzufügen
        let newButton = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("inneneinrichtung4-produkt" + index)?.appendChild(newButton);
    }
})(Inneneinrichtung4 || (Inneneinrichtung4 = {}));
var Außeneinrichtung;
(function (Außeneinrichtung) {
    let palettenmoebel1 = {
        bild: "produktbilder/palette_gartenbank.jpg",
        name: "Gartenbank mit Tisch",
        beschreibung: "Gartenbank mit Armstützen und Tisch",
        preis: "300.50€"
    };
    let palettenmoebel2 = {
        bild: "produktbilder/palette_gartenbank2.jpg",
        name: "Hängeschaukel",
        beschreibung: "Befestigungen enthalten",
        preis: "50.99€"
    };
    let palettenmoebel3 = {
        bild: "produktbilder/palettenbank.jpg",
        name: "Gartenbank mit Tisch",
        beschreibung: "Palettenbank mit Lehne",
        preis: "260.99€"
    };
    let außeneinrichtungProdukte = [palettenmoebel1, palettenmoebel2, palettenmoebel3];
    for (let index = 0; index < außeneinrichtungProdukte.length; index++) {
        //Div erzeugen
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "außeneinrichtung-div");
        newDiv.setAttribute("id", "außeneinrichtung-produkt" + index);
        document.getElementById("außeneinrichtung")?.appendChild(newDiv);
        //Produktbild hinzufügen
        let newBild = document.createElement("img");
        newBild.setAttribute("src", außeneinrichtungProdukte[index].bild);
        newBild.setAttribute("alt", "außeneinrichtung-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("außeneinrichtung-produkt" + index)?.appendChild(newBild);
        //Produktbezeichnung hinzufügen
        let newH3 = document.createElement("h3");
        newH3.innerHTML = außeneinrichtungProdukte[index].name;
        document.getElementById("außeneinrichtung-produkt" + index)?.appendChild(newH3);
        //Produkt_beschreibung hinzufügen
        let newP = document.createElement("p");
        newP.innerHTML = außeneinrichtungProdukte[index].beschreibung;
        document.getElementById("außeneinrichtung-produkt" + index)?.appendChild(newP);
        // _preis hinzufügen
        let newPreis = document.createElement("h4");
        newPreis.innerHTML = außeneinrichtungProdukte[index].preis + "€";
        document.getElementById("außeneinrichtung-produkt" + index)?.appendChild(newPreis);
        //Button hinzufügen
        let newButton = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("außeneinrichtung-produkt" + index)?.appendChild(newButton);
    }
})(Außeneinrichtung || (Außeneinrichtung = {}));
var Außeneinrichtung2;
(function (Außeneinrichtung2) {
    let windlichter1 = {
        bild: "produktbilder/windlicht.jpg",
        name: "Windlicht",
        beschreibung: "Einfaches windlicht mit kleiner Blume",
        preis: "12.99€"
    };
    let windlichter2 = {
        bild: "produktbilder/windlicht_makramee.jpg",
        name: "Windlicht mit Makramee",
        beschreibung: "Windlicht mit Makrameedesign",
        preis: "12.99€"
    };
    let windlichter3 = {
        bild: "produktbilder/windlicht_zeitung.jpg",
        name: "Windlicht",
        beschreibung: "Windlichtglas mit Zeitung",
        preis: "15.50€"
    };
    let außeneinrichtung2Produkte = [windlichter1, windlichter2, windlichter3];
    for (let index = 0; index < außeneinrichtung2Produkte.length; index++) {
        //Div erzeugen
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "außeneinrichtung2-div");
        newDiv.setAttribute("id", "außeneinrichtung2-produkt" + index);
        document.getElementById("außeneinrichtung2")?.appendChild(newDiv);
        //Produktbild hinzufügen
        let newBild = document.createElement("img");
        newBild.setAttribute("src", außeneinrichtung2Produkte[index].bild);
        newBild.setAttribute("alt", "außeneinrichtung2-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("außeneinrichtung2-produkt" + index)?.appendChild(newBild);
        //Produktbezeichnung hinzufügen
        let newH3 = document.createElement("h3");
        newH3.innerHTML = außeneinrichtung2Produkte[index].name;
        document.getElementById("außeneinrichtung2-produkt" + index)?.appendChild(newH3);
        //Produkt_beschreibung hinzufügen
        let newP = document.createElement("p");
        newP.innerHTML = außeneinrichtung2Produkte[index].beschreibung;
        document.getElementById("außeneinrichtung2-produkt" + index)?.appendChild(newP);
        // _preis hinzufügen
        let newPreis = document.createElement("h4");
        newPreis.innerHTML = außeneinrichtung2Produkte[index].preis + "€";
        document.getElementById("außeneinrichtung2-produkt" + index)?.appendChild(newPreis);
        //Button hinzufügen
        let newButton = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("außeneinrichtung2-produkt" + index)?.appendChild(newButton);
    }
})(Außeneinrichtung2 || (Außeneinrichtung2 = {}));
var DoItYourself;
(function (DoItYourself) {
    let anleitung1 = {
        bild: "produktbilder/anleitung-blumenampel.jpg",
        name: "Blumenampel",
        beschreibung: "Erstell dir deine eigene Blumenampel.",
        link: "https://www.muckout.de/diy-makramee-blumenampel-selbermachen-inkl-video/"
    };
    let anleitung2 = {
        bild: "produktbilder/anleitung_Makramee-Federn.jpg",
        name: "Federgirlande",
        beschreibung: "Erstell dir deine eigene Federgirlande.",
        link: "https://dreieckchen.de/makramee-federn-girlande-selbst-machen/"
    };
    let doityourselfProdukte = [anleitung1, anleitung2];
    for (let index = 0; index < doityourselfProdukte.length; index++) {
        //Div erzeugen
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "doityourself-div");
        newDiv.setAttribute("id", "doityourself-produkt" + index);
        document.getElementById("doityourself")?.appendChild(newDiv);
        //Produktbild hinzufügen
        let newBild = document.createElement("img");
        newBild.setAttribute("src", doityourselfProdukte[index].bild);
        newBild.setAttribute("alt", "doitypourself-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("doityourself-produkt" + index)?.appendChild(newBild);
        //Produktbezeichnung hinzufügen
        let newH3 = document.createElement("h3");
        newH3.innerHTML = doityourselfProdukte[index].name;
        document.getElementById("doityourself-produkt" + index)?.appendChild(newH3);
        //Produkt_beschreibung hinzufügen
        let newP = document.createElement("p");
        newP.innerHTML = doityourselfProdukte[index].beschreibung;
        document.getElementById("doityourself-produkt" + index)?.appendChild(newP);
    }
})(DoItYourself || (DoItYourself = {}));
//# sourceMappingURL=script.js.map
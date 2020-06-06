"use strict";
var Artikel;
(function (Artikel) {
    //Produkte auflisten
    let fotohalter1 = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/fotohalter.jpg",
        name: "Fotohalter",
        beschreibung: "3 Betonhalter für Fotos, Karten, etc.",
        preis: 12.99
    };
    let fotohalter2 = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/fotohalter_kleiderbuegel.jpg",
        name: "Fotohalter-Kleiderbügel",
        beschreibung: "6 Kleiderbügel, Farbe: silber",
        preis: 20.55
    };
    let fotohalter3 = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/fotohalter_love.jpg",
        name: "Fotohalter-Love",
        beschreibung: "Buchstaben aus Beton",
        preis: 14.99
    };
    let holzgegenstaende1 = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/holz_aufsteller.jpg",
        name: "Aufsteller",
        beschreibung: "Aufsteller aus Holz für kleine Pflanzen",
        preis: 12.99
    };
    let holzgegenstaende2 = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/holz_haenger.jpg",
        name: "Hänger",
        beschreibung: "1 Holzscheibe mit 3 Schnüren",
        preis: 20.55
    };
    let holzgegenstaende3 = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/holz_sofatablett.jpg",
        name: "Sofatablett",
        beschreibung: "Tablett zur Ablage von Zeitschrift, etc.",
        preis: 14.99
    };
    let vase1 = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/vase_schrift.jpg",
        name: "Vase mit Schrift",
        beschreibung: "4 Vasen mit Schriftverzierung",
        preis: 14.99
    };
    let vase2 = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/vase_reagenzglas.jpg",
        name: "Reagenzglas",
        beschreibung: "Gebogener Halter mit Reagenzglas",
        preis: 14.99
    };
    let vase3 = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/vase_papier.jpg",
        name: "Vase mit Papierhülle",
        beschreibung: "Papierhüllen in versch. Farben",
        preis: 14.99
    };
    let wanddekoration1 = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/wanddeko_rund.jpg",
        name: "Spiegel mit Holzstrahlen",
        beschreibung: "Spiegel mit Holzstrahlen",
        preis: 20.55
    };
    let wanddekoration2 = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/wanddeko_regal.jpg",
        name: "Wandregal",
        beschreibung: "2 hängende Regale",
        preis: 15.55
    };
    let palettenmoebel1 = {
        kategorie: "außeneinrichtung",
        bild: "produktbilder/palette_gartenbank.jpg",
        name: "Gartenbank mit Tisch",
        beschreibung: "Gartenbank mit Armstützen und Tisch",
        preis: 300.55
    };
    let palettenmoebel2 = {
        kategorie: "außeneinrichtung",
        bild: "produktbilder/palette_gartenbank2.jpg",
        name: "Hängeschaukel",
        beschreibung: "Befestigungen enthalten",
        preis: 50.99
    };
    let palettenmoebel3 = {
        kategorie: "außeneinrichtung",
        bild: "produktbilder/palettenbank.jpg",
        name: "Gartenbank mit Tisch",
        beschreibung: "Palettenbank mit Lehne",
        preis: 260.99
    };
    let windlichter1 = {
        kategorie: "außeneinrichtung",
        bild: "produktbilder/windlicht.jpg",
        name: "Windlicht",
        beschreibung: "Einfaches windlicht mit Blume",
        preis: 12.99
    };
    let windlichter2 = {
        kategorie: "außeneinrichtung",
        bild: "produktbilder/windlicht_makramee.jpg",
        name: "Windlicht mit Makramee",
        beschreibung: "Windlicht mit Makrameedesign",
        preis: 12.99
    };
    let windlichter3 = {
        kategorie: "außeneinrichtung",
        bild: "produktbilder/windlicht_zeitung.jpg",
        name: "Windlicht",
        beschreibung: "Windlichtglas mit Zeitung",
        preis: 15.55
    };
    //Array erstellen, in dem alle Produkte aufgelistet sind
    let artikelProdukte = [fotohalter1, fotohalter2, fotohalter3, holzgegenstaende1, holzgegenstaende2, holzgegenstaende3, vase1, vase2, vase3, wanddekoration1, wanddekoration2, palettenmoebel1, palettenmoebel2, palettenmoebel3, windlichter1, windlichter2, windlichter3];
    for (let index = 0; index < artikelProdukte.length; index++) {
        //Div erzeugen
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "artikel");
        newDiv.setAttribute("id", "produkt" + index);
        //Produktbild hinzufügen
        let newBild = document.createElement("img");
        newBild.setAttribute("src", artikelProdukte[index].bild);
        newBild.setAttribute("alt", "produkt");
        newBild.setAttribute("class", "produktbild");
        //Produktbezeichnung hinzufügen
        let newH3 = document.createElement("h3");
        newH3.innerHTML = artikelProdukte[index].name;
        //Produktbeschreibung hinzufügen
        let newP = document.createElement("p");
        newP.innerHTML = artikelProdukte[index].beschreibung;
        //Preis hinzufügen
        let newPreis = document.createElement("h4");
        newPreis.innerHTML = artikelProdukte[index].preis + "€";
        //Button hinzufügen
        let newButton = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        newButton.addEventListener("click", einkaufenBtn);
        newButton.setAttribute("preis", artikelProdukte[index].preis.toString());
        switch (artikelProdukte[index].kategorie) {
            case "inneneinrichtung":
                document.getElementById("inneneinrichtung")?.appendChild(newDiv);
                document.getElementById("produkt" + index)?.appendChild(newBild);
                document.getElementById("produkt" + index)?.appendChild(newH3);
                document.getElementById("produkt" + index)?.appendChild(newP);
                document.getElementById("produkt" + index)?.appendChild(newPreis);
                document.getElementById("produkt" + index)?.appendChild(newButton);
                break;
            case "außeneinrichtung":
                document.getElementById("außeneinrichtung")?.appendChild(newDiv);
                document.getElementById("produkt" + index)?.appendChild(newBild);
                document.getElementById("produkt" + index)?.appendChild(newH3);
                document.getElementById("produkt" + index)?.appendChild(newP);
                document.getElementById("produkt" + index)?.appendChild(newPreis);
                document.getElementById("produkt" + index)?.appendChild(newButton);
                break;
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
})(Artikel || (Artikel = {}));
//# sourceMappingURL=script.js.map
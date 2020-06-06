
namespace Artikel {
    interface ArtikelProdukte {
        kategorie: string;
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
    }

    //Produkte auflisten
    let fotohalter1: ArtikelProdukte = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/fotohalter.jpg",
        name: "Fotohalter",
        beschreibung: "3 Betonhalter für Fotos, Karten, etc.",
        preis: 12.99
    };

    let fotohalter2: ArtikelProdukte = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/fotohalter_kleiderbuegel.jpg",
        name: "Fotohalter-Kleiderbügel",
        beschreibung: "6 Kleiderbügel, Farbe: silber",
        preis: 20.55
    };

    let fotohalter3: ArtikelProdukte = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/fotohalter_love.jpg",
        name: "Fotohalter-Love",
        beschreibung: "Buchstaben aus Beton",
        preis: 14.99
    };

    let holzgegenstaende1: ArtikelProdukte = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/holz_aufsteller.jpg",
        name: "Aufsteller",
        beschreibung: "Aufsteller aus Holz für kleine Pflanzen",
        preis: 12.99
    };

    let holzgegenstaende2: ArtikelProdukte = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/holz_haenger.jpg",
        name: "Hänger",
        beschreibung: "1 Holzscheibe mit 3 Schnüren",
        preis: 20.55
    };

    let holzgegenstaende3: ArtikelProdukte = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/holz_sofatablett.jpg",
        name: "Sofatablett",
        beschreibung: "Tablett zur Ablage von Zeitschrift, etc.",
        preis: 14.99
    };

    let vase1: ArtikelProdukte = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/vase_schrift.jpg",
        name: "Vase mit Schrift",
        beschreibung: "4 Vasen mit Schriftverzierung",
        preis: 14.99
    };

    let vase2: ArtikelProdukte = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/vase_reagenzglas.jpg",
        name: "Reagenzglas",
        beschreibung: "Gebogener Halter mit Reagenzglas",
        preis: 14.99
    };

    let vase3: ArtikelProdukte = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/vase_papier.jpg",
        name: "Vase mit Papierhülle",
        beschreibung: "Papierhüllen in versch. Farben",
        preis: 14.99
    };

    let wanddekoration1: ArtikelProdukte = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/wanddeko_rund.jpg",
        name: "Spiegel mit Holzstrahlen",
        beschreibung: "Spiegel mit Holzstrahlen",
        preis: 20.55
    };

    let wanddekoration2: ArtikelProdukte = {
        kategorie: "inneneinrichtung",
        bild: "produktbilder/wanddeko_regal.jpg",
        name: "Wandregal",
        beschreibung: "2 hängende Regale",
        preis: 15.55
    };

    let palettenmoebel1: ArtikelProdukte = {
        kategorie: "außeneinrichtung",
        bild: "produktbilder/palette_gartenbank.jpg",
        name: "Gartenbank mit Tisch",
        beschreibung: "Gartenbank mit Armstützen und Tisch",
        preis: 300.55
    };

    let palettenmoebel2: ArtikelProdukte = {
        kategorie: "außeneinrichtung",
        bild: "produktbilder/palette_gartenbank2.jpg",
        name: "Hängeschaukel",
        beschreibung: "Befestigungen enthalten",
        preis: 50.99
    };

    let palettenmoebel3: ArtikelProdukte = {
        kategorie: "außeneinrichtung",
        bild: "produktbilder/palettenbank.jpg",
        name: "Gartenbank mit Tisch",
        beschreibung: "Palettenbank mit Lehne",
        preis: 260.99
    };

    let windlichter1: ArtikelProdukte = {
        kategorie: "außeneinrichtung",
        bild: "produktbilder/windlicht.jpg",
        name: "Windlicht",
        beschreibung: "Einfaches windlicht mit Blume",
        preis: 12.99
    };

    let windlichter2: ArtikelProdukte = {
        kategorie: "außeneinrichtung",
        bild: "produktbilder/windlicht_makramee.jpg",
        name: "Windlicht mit Makramee",
        beschreibung: "Windlicht mit Makrameedesign",
        preis: 12.99
    };

    let windlichter3: ArtikelProdukte = {
        kategorie: "außeneinrichtung",
        bild: "produktbilder/windlicht_zeitung.jpg",
        name: "Windlicht",
        beschreibung: "Windlichtglas mit Zeitung",
        preis: 15.55
    };



    //Array erstellen, in dem alle Produkte aufgelistet sind
    let artikelProdukte: ArtikelProdukte[] = [fotohalter1, fotohalter2, fotohalter3, holzgegenstaende1, holzgegenstaende2, holzgegenstaende3, vase1, vase2, vase3, wanddekoration1, wanddekoration2, palettenmoebel1, palettenmoebel2, palettenmoebel3, windlichter1, windlichter2, windlichter3];

    for (let index: number = 0; index < artikelProdukte.length; index++) {

        //Div erzeugen
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.setAttribute("class", "artikel");
        newDiv.setAttribute("id", "produkt" + index);

        //Produktbild hinzufügen
        let newBild: HTMLElement = document.createElement("img");
        newBild.setAttribute("src", artikelProdukte[index].bild);
        newBild.setAttribute("alt", "produkt");
        newBild.setAttribute("class", "produktbild");

        //Produktbezeichnung hinzufügen
        let newH3: HTMLHeadingElement = document.createElement("h3");
        newH3.innerHTML = artikelProdukte[index].name;

        //Produktbeschreibung hinzufügen
        let newP: HTMLParagraphElement = document.createElement("p");
        newP.innerHTML = artikelProdukte[index].beschreibung;

        //Preis hinzufügen
        let newPreis: HTMLHeadingElement = document.createElement("h4");
        newPreis.innerHTML = artikelProdukte[index].preis + "€";

        //Button hinzufügen
        let newButton: HTMLButtonElement = document.createElement("button");
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


    let artikelrechner: number = 0;
    let preis: number = 0;

    //Zähler für die Anzahl erstellen
    let anzahlZaehler: HTMLParagraphElement = document.createElement("p");

    //Blase erstellen beim Einkaufswagen
    let produktAnzeige: HTMLDivElement = document.createElement("div");
    produktAnzeige.id = "produktAnzeige";


    function einkaufenBtn(_event: Event): void {
        artikelrechner++;
        console.log(artikelrechner);

        preis += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
        console.log(preis);

        //Blase erstellen bei min. 1 Artikel
        if (artikelrechner >= 0) {
            document.getElementById("produktBlase")?.appendChild(produktAnzeige);
        }

        //Zahl in Blase anzeigen
        anzahlZaehler.innerHTML = "" + artikelrechner;
        document.getElementById("produktAnzeige")?.appendChild(anzahlZaehler);
    }
}

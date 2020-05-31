console.log("Hallo");
//Inneneinrichtung-Fotohalter
//Produkte definieren
namespace Inneneinrichtung {
    interface InneneinrichtungProdukte {
        bild: string;
        name: string;
        beschreibung: string;
        preis: string;
    }

    //Produkte auflisten
    let fotohalter1: InneneinrichtungProdukte = {
        bild: "produktbilder/fotohalter.jpg",
        name: "Fotohalter",
        beschreibung: "3 Betonhalter mit Klipper, für Fotos, Karten, etc.",
        preis: "12.99€"
    };

    let fotohalter2: InneneinrichtungProdukte = {
        bild: "produktbilder/fotohalter_kleiderbuegel.jpg",
        name: "Fotohalter-Kleiderbügel",
        beschreibung: "6 Kleiderbügel, Farbe: silber, Wandschrauben nicht enthalten",
        preis: "20.50€"
    };

    let fotohalter3: InneneinrichtungProdukte = {
        bild: "produktbilder/fotohalter_love.jpg",
        name: "Fotohalter-Love",
        beschreibung: "Buchstaben aus Beton, 8 Drähte für die Fotos enthalten",
        preis: "14.99€"
    };

    //Array erstellen, in dem alle Produkte aufgelistet sind
    let inneneinrichtungProdukte: InneneinrichtungProdukte[] = [fotohalter1, fotohalter2, fotohalter3];

    for (let index: number = 0; index < inneneinrichtungProdukte.length; index++) {
        //Div erzeugen
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.setAttribute("class", "inneneinrichtung-div");
        newDiv.setAttribute("id", "inneneinrichtung-produkt" + index);
        document.getElementById("inneneinrichtung")?.appendChild(newDiv);

        //Produktbild hinzufügen
        let newBild: HTMLElement = document.createElement("img");
        newBild.setAttribute("src", inneneinrichtungProdukte[index].bild);
        newBild.setAttribute("alt", "inneneinrichtung-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("inneneinrichtung-produkt" + index)?.appendChild(newBild);

        //Produktbezeichnung hinzufügen
        let newH3: HTMLHeadingElement = document.createElement("h3");
        newH3.innerHTML = inneneinrichtungProdukte[index].name;
        document.getElementById("inneneinrichtung-produkt" + index)?.appendChild(newH3);

        //Produkt_beschreibung hinzufügen
        let newP: HTMLParagraphElement = document.createElement("p");
        newP.innerHTML = inneneinrichtungProdukte[index].beschreibung;
        document.getElementById("inneneinrichtung-produkt" + index)?.appendChild(newP);

        // _preis hinzufügen
        let newPreis: HTMLHeadingElement = document.createElement("h4");
        newPreis.innerHTML = inneneinrichtungProdukte[index].preis + "€";
        document.getElementById("inneneinrichtung-produkt" + index)?.appendChild(newPreis);

        //Button hinzufügen
        let newButton: HTMLButtonElement = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("inneneinrichtung-produkt" + index)?.appendChild(newButton);
    }
}

//Inneneinrichtung-Holzgegenstände
namespace Inneneinrichtung2 {
    interface Inneneinrichtung2Produkte {
        bild: string;
        name: string;
        beschreibung: string;
        preis: string;
    }
    let holzgegenstaende1: Inneneinrichtung2Produkte = {
        bild: "produktbilder/holz_aufsteller.jpg",
        name: "Aufsteller",
        beschreibung: "Aufsteller aus Holz für kleine Pflanzen",
        preis: "12.99€"
    };

    let holzgegenstaende2: Inneneinrichtung2Produkte = {
        bild: "produktbilder/holz_haenger.jpg",
        name: "Hänger",
        beschreibung: "1 Holzscheibe mit 3 Schnüren, Ablage für Blumen, Karten, etc.",
        preis: "20.50€"
    };

    let holzgegenstaende3: Inneneinrichtung2Produkte = {
        bild: "produktbilder/holz_sofatablett.jpg",
        name: "Sofatablett",
        beschreibung: "Tablett zur Ablage von Fernbedienung, Zeitschrift, etc.",
        preis: "14.99€"
    };

    let inneneinrichtung2Produkte: Inneneinrichtung2Produkte[] = [holzgegenstaende1, holzgegenstaende2, holzgegenstaende3];

    for (let index: number = 0; index < inneneinrichtung2Produkte.length; index++) {
        //Div erzeugen
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.setAttribute("class", "inneneinrichtung2-div");
        newDiv.setAttribute("id", "inneneinrichtung2-produkt" + index);
        document.getElementById("inneneinrichtung2")?.appendChild(newDiv);

        //Produktbild hinzufügen
        let newBild: HTMLElement = document.createElement("img");
        newBild.setAttribute("src", inneneinrichtung2Produkte[index].bild);
        newBild.setAttribute("alt", "inneneinrichtung2-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("inneneinrichtung2-produkt" + index)?.appendChild(newBild);

        //Produktbezeichnung hinzufügen
        let newH3: HTMLHeadingElement = document.createElement("h3");
        newH3.innerHTML = inneneinrichtung2Produkte[index].name;
        document.getElementById("inneneinrichtung2-produkt" + index)?.appendChild(newH3);

        //Produkt_beschreibung hinzufügen
        let newP: HTMLParagraphElement = document.createElement("p");
        newP.innerHTML = inneneinrichtung2Produkte[index].beschreibung;
        document.getElementById("inneneinrichtung2-produkt" + index)?.appendChild(newP);

        // _preis hinzufügen
        let newPreis: HTMLHeadingElement = document.createElement("h4");
        newPreis.innerHTML = inneneinrichtung2Produkte[index].preis + "€";
        document.getElementById("inneneinrichtung2-produkt" + index)?.appendChild(newPreis);

        //Button hinzufügen
        let newButton: HTMLButtonElement = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("inneneinrichtung2-produkt" + index)?.appendChild(newButton);
    }
}

//Inneneinrichtung-Vasen
namespace Inneneinrichtung3 {
    interface Inneneinrichtung3Produkte {
        bild: string;
        name: string;
        beschreibung: string;
        preis: string;
    }

    let vase1: Inneneinrichtung3Produkte = {
        bild: "produktbilder/vase_schrift.jpg",
        name: "Vase mit Schrift",
        beschreibung: "Tablett zur Ablage von Fernbedienung, Zeitschrift, etc.",
        preis: "14.99€"
    };

    let vase2: Inneneinrichtung3Produkte = {
        bild: "produktbilder/vase_reagenzglas.jpg",
        name: "Reagenzglas",
        beschreibung: "Tablett zur Ablage von Fernbedienung, Zeitschrift, etc.",
        preis: "14.99€"
    };

    let vase3: Inneneinrichtung3Produkte = {
        bild: "produktbilder/vase_papier.jpg",
        name: "Vase mit Papierhülle",
        beschreibung: "Tablett zur Ablage von Fernbedienung, Zeitschrift, etc.",
        preis: "14.99€"
    };

    let inneneinrichtung3Produkte: Inneneinrichtung3Produkte[] = [vase1, vase2, vase3];

    for (let index: number = 0; index < inneneinrichtung3Produkte.length; index++) {
        //Div erzeugen
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.setAttribute("class", "inneneinrichtung3-div");
        newDiv.setAttribute("id", "inneneinrichtung3-produkt" + index);
        document.getElementById("inneneinrichtung3")?.appendChild(newDiv);

        //Produktbild hinzufügen
        let newBild: HTMLElement = document.createElement("img");
        newBild.setAttribute("src", inneneinrichtung3Produkte[index].bild);
        newBild.setAttribute("alt", "inneneinrichtung3-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("inneneinrichtung3-produkt" + index)?.appendChild(newBild);

        //Produktbezeichnung hinzufügen
        let newH3: HTMLHeadingElement = document.createElement("h3");
        newH3.innerHTML = inneneinrichtung3Produkte[index].name;
        document.getElementById("inneneinrichtung3-produkt" + index)?.appendChild(newH3);

        //Produkt_beschreibung hinzufügen
        let newP: HTMLParagraphElement = document.createElement("p");
        newP.innerHTML = inneneinrichtung3Produkte[index].beschreibung;
        document.getElementById("inneneinrichtung3-produkt" + index)?.appendChild(newP);

        // _preis hinzufügen
        let newPreis: HTMLHeadingElement = document.createElement("h4");
        newPreis.innerHTML = inneneinrichtung3Produkte[index].preis + "€";
        document.getElementById("inneneinrichtung3-produkt" + index)?.appendChild(newPreis);

        //Button hinzufügen
        let newButton: HTMLButtonElement = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("inneneinrichtung3-produkt" + index)?.appendChild(newButton);
    }
}

//Inneneinrichtung-Wanddekoration
namespace Inneneinrichtung4 {
    interface Inneneinrichtung4Produkte {
        bild: string;
        name: string;
        beschreibung: string;
        preis: string;
    }

    let wanddekoration1: Inneneinrichtung4Produkte = {
        bild: "produktbilder/wanddeko_rund.jpg",
        name: "Spiegel mit Holzstrahlen",
        beschreibung: "Spiegel mit Holzstrahlen, Spiegeldurchmesser: 30 cm",
        preis: "20.50€"
    };

    let wanddekoration2: Inneneinrichtung4Produkte = {
        bild: "produktbilder/wanddeko_regal.jpg",
        name: "Wandregal",
        beschreibung: "2 hängende Regale, Aufhänger: Ring, Länge anpassbar",
        preis: "15.50€"
    };


    let inneneinrichtung4Produkte: Inneneinrichtung4Produkte[] = [wanddekoration1, wanddekoration2];

    for (let index: number = 0; index < inneneinrichtung4Produkte.length; index++) {
        //Div erzeugen
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.setAttribute("class", "inneneinrichtung4-div");
        newDiv.setAttribute("id", "inneneinrichtung4-produkt" + index);
        document.getElementById("inneneinrichtung4")?.appendChild(newDiv);

        //Produktbild hinzufügen
        let newBild: HTMLElement = document.createElement("img");
        newBild.setAttribute("src", inneneinrichtung4Produkte[index].bild);
        newBild.setAttribute("alt", "inneneinrichtung4-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("inneneinrichtung4-produkt" + index)?.appendChild(newBild);

        //Produktbezeichnung hinzufügen
        let newH3: HTMLHeadingElement = document.createElement("h3");
        newH3.innerHTML = inneneinrichtung4Produkte[index].name;
        document.getElementById("inneneinrichtung4-produkt" + index)?.appendChild(newH3);

        //Produkt_beschreibung hinzufügen
        let newP: HTMLParagraphElement = document.createElement("p");
        newP.innerHTML = inneneinrichtung4Produkte[index].beschreibung;
        document.getElementById("inneneinrichtung4-produkt" + index)?.appendChild(newP);

        // _preis hinzufügen
        let newPreis: HTMLHeadingElement = document.createElement("h4");
        newPreis.innerHTML = inneneinrichtung4Produkte[index].preis + "€";
        document.getElementById("inneneinrichtung4-produkt" + index)?.appendChild(newPreis);

        //Button hinzufügen
        let newButton: HTMLButtonElement = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("inneneinrichtung4-produkt" + index)?.appendChild(newButton);
    }
}

namespace Außeneinrichtung {
    interface AußeneinrichtungProdukte {
        bild: string;
        name: string;
        beschreibung: string;
        preis: string;
    }

    let palettenmoebel1: AußeneinrichtungProdukte = {
        bild: "produktbilder/palette_gartenbank.jpg",
        name: "Gartenbank mit Tisch",
        beschreibung: "Gartenbank mit Armstützen und Tisch",
        preis: "300.50€"
    };

    let palettenmoebel2: AußeneinrichtungProdukte = {
        bild: "produktbilder/palette_gartenbank2.jpg",
        name: "Hängeschaukel",
        beschreibung: "Befestigungen enthalten",
        preis: "50.99€"
    };

    let palettenmoebel3: AußeneinrichtungProdukte = {
        bild: "produktbilder/palettenbank.jpg",
        name: "Gartenbank mit Tisch",
        beschreibung: "Palettenbank mit Lehne",
        preis: "260.99€"
    };

    let außeneinrichtungProdukte: AußeneinrichtungProdukte[] = [palettenmoebel1, palettenmoebel2, palettenmoebel3];

    for (let index: number = 0; index < außeneinrichtungProdukte.length; index++) {
        //Div erzeugen
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.setAttribute("class", "außeneinrichtung-div");
        newDiv.setAttribute("id", "außeneinrichtung-produkt" + index);
        document.getElementById("außeneinrichtung")?.appendChild(newDiv);

        //Produktbild hinzufügen
        let newBild: HTMLElement = document.createElement("img");
        newBild.setAttribute("src", außeneinrichtungProdukte[index].bild);
        newBild.setAttribute("alt", "außeneinrichtung-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("außeneinrichtung-produkt" + index)?.appendChild(newBild);

        //Produktbezeichnung hinzufügen
        let newH3: HTMLHeadingElement = document.createElement("h3");
        newH3.innerHTML = außeneinrichtungProdukte[index].name;
        document.getElementById("außeneinrichtung-produkt" + index)?.appendChild(newH3);

        //Produkt_beschreibung hinzufügen
        let newP: HTMLParagraphElement = document.createElement("p");
        newP.innerHTML = außeneinrichtungProdukte[index].beschreibung;
        document.getElementById("außeneinrichtung-produkt" + index)?.appendChild(newP);

        // _preis hinzufügen
        let newPreis: HTMLHeadingElement = document.createElement("h4");
        newPreis.innerHTML = außeneinrichtungProdukte[index].preis + "€";
        document.getElementById("außeneinrichtung-produkt" + index)?.appendChild(newPreis);

        //Button hinzufügen
        let newButton: HTMLButtonElement = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("außeneinrichtung-produkt" + index)?.appendChild(newButton);
    }
}

namespace Außeneinrichtung2 {
    interface Außeneinrichtung2Produkte {
        bild: string;
        name: string;
        beschreibung: string;
        preis: string;
    }
    let windlichter1: Außeneinrichtung2Produkte = {
        bild: "produktbilder/windlicht.jpg",
        name: "Windlicht",
        beschreibung: "Einfaches windlicht mit kleiner Blume",
        preis: "12.99€"
    };

    let windlichter2: Außeneinrichtung2Produkte = {
        bild: "produktbilder/windlicht_makramee.jpg",
        name: "Windlicht mit Makramee",
        beschreibung: "Windlicht mit Makrameedesign",
        preis: "12.99€"
    };

    let windlichter3: Außeneinrichtung2Produkte = {
        bild: "produktbilder/windlicht_zeitung.jpg",
        name: "Windlicht",
        beschreibung: "Windlichtglas mit Zeitung",
        preis: "15.50€"
    };

    let außeneinrichtung2Produkte: Außeneinrichtung2Produkte[] = [windlichter1, windlichter2, windlichter3];

    for (let index: number = 0; index < außeneinrichtung2Produkte.length; index++) {
        //Div erzeugen
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.setAttribute("class", "außeneinrichtung2-div");
        newDiv.setAttribute("id", "außeneinrichtung2-produkt" + index);
        document.getElementById("außeneinrichtung2")?.appendChild(newDiv);

        //Produktbild hinzufügen
        let newBild: HTMLElement = document.createElement("img");
        newBild.setAttribute("src", außeneinrichtung2Produkte[index].bild);
        newBild.setAttribute("alt", "außeneinrichtung2-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("außeneinrichtung2-produkt" + index)?.appendChild(newBild);

        //Produktbezeichnung hinzufügen
        let newH3: HTMLHeadingElement = document.createElement("h3");
        newH3.innerHTML = außeneinrichtung2Produkte[index].name;
        document.getElementById("außeneinrichtung2-produkt" + index)?.appendChild(newH3);

        //Produkt_beschreibung hinzufügen
        let newP: HTMLParagraphElement = document.createElement("p");
        newP.innerHTML = außeneinrichtung2Produkte[index].beschreibung;
        document.getElementById("außeneinrichtung2-produkt" + index)?.appendChild(newP);

        // _preis hinzufügen
        let newPreis: HTMLHeadingElement = document.createElement("h4");
        newPreis.innerHTML = außeneinrichtung2Produkte[index].preis + "€";
        document.getElementById("außeneinrichtung2-produkt" + index)?.appendChild(newPreis);

        //Button hinzufügen
        let newButton: HTMLButtonElement = document.createElement("button");
        newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("außeneinrichtung2-produkt" + index)?.appendChild(newButton);
    }
}

namespace DoItYourself {
    interface DoItYourselfProdukte {
        bild: string;
        name: string;
        beschreibung: string;
        link: string;
    }

    let anleitung1: DoItYourselfProdukte = {
        bild: "produktbilder/anleitung-blumenampel.jpg",
        name: "Blumenampel",
        beschreibung: "Erstell dir deine eigene Blumenampel.",
        link: "https://www.muckout.de/diy-makramee-blumenampel-selbermachen-inkl-video/"
    };

    let anleitung2: DoItYourselfProdukte = {
        bild: "produktbilder/anleitung_Makramee-Federn.jpg",
        name: "Federgirlande",
        beschreibung: "Erstell dir deine eigene Federgirlande.",
        link: "https://dreieckchen.de/makramee-federn-girlande-selbst-machen/"
    };

    let doityourselfProdukte: DoItYourselfProdukte[] = [anleitung1, anleitung2];

    for (let index: number = 0; index < doityourselfProdukte.length; index++) {
        //Div erzeugen
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.setAttribute("class", "doityourself-div");
        newDiv.setAttribute("id", "doityourself-produkt" + index);
        document.getElementById("doityourself")?.appendChild(newDiv);

        //Produktbild hinzufügen
        let newBild: HTMLElement = document.createElement("img");
        newBild.setAttribute("src", doityourselfProdukte[index].bild);
        newBild.setAttribute("alt", "doitypourself-Produkt");
        newBild.setAttribute("class", "produktbild");
        document.getElementById("doityourself-produkt" + index)?.appendChild(newBild);

        //Produktbezeichnung hinzufügen
        let newH3: HTMLHeadingElement = document.createElement("h3");
        newH3.innerHTML = doityourselfProdukte[index].name;
        document.getElementById("doityourself-produkt" + index)?.appendChild(newH3);

        //Produkt_beschreibung hinzufügen
        let newP: HTMLParagraphElement = document.createElement("p");
        newP.innerHTML = doityourselfProdukte[index].beschreibung;
        document.getElementById("doityourself-produkt" + index)?.appendChild(newP);
    }
}


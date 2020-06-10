
namespace Artikel {
    window.addEventListener("load", init);
    interface ArtikelProdukte {
        kategorie: string;
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
    }

    let articles: ArtikelProdukte[] = [];

  

    function init(_event: Event): void { 
       
        communicate("articles.json");
        buildNavListener();
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        
        let response: Response = await fetch(_url);
        articles = <ArtikelProdukte[]>await response.json();
        buildArticles(articles);
        console.log("Response", response);
    }
    

    function buildArticles(_articles: ArtikelProdukte[]): void {
        for (let index: number = 0; index < _articles.length; index++) {
            console.log(_articles[index]);
            //Div erzeugen
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.setAttribute("class", "artikel");
            newDiv.setAttribute("id", "produkt" + index);
            document.getElementById("inneneinrichtung")?.appendChild(newDiv);

            //Produktbild hinzufügen
            let newBild: HTMLElement = document.createElement("img");
            newBild.setAttribute("src", _articles[index].bild);
            newBild.setAttribute("alt", "produkt");
            newBild.setAttribute("class", "produktbild");
            document.getElementById("produkt" + index)?.appendChild(newBild);

            //Produktbezeichnung hinzufügen
            let newH3: HTMLHeadingElement = document.createElement("h3");
            newH3.innerHTML = _articles[index].name;
            document.getElementById("produkt" + index)?.appendChild(newH3);

            //Produktbeschreibung hinzufügen
            let newP: HTMLParagraphElement = document.createElement("p");
            newP.innerHTML = _articles[index].beschreibung;
            document.getElementById("produkt" + index)?.appendChild(newP);

            //Preis hinzufügen
            let newPreis: HTMLHeadingElement = document.createElement("h4");
            newPreis.innerHTML = _articles[index].preis + "€";
            document.getElementById("produkt" + index)?.appendChild(newPreis);

            //Button hinzufügen
            let newButton: HTMLButtonElement = document.createElement("button");
            newButton.innerHTML = "Jetzt kaufen";
            newButton.addEventListener("click", einkaufenBtn);
            newButton.setAttribute("preis", _articles[index].preis.toString());
            document.getElementById("produkt" + index)?.appendChild(newButton);

            switch (_articles[index].kategorie) {
                case "inneneinrichtung":
                    let getContainerInneneinrichtung: HTMLElement = document.getElementById("inneneinrichtung")!;
                    console.log(getContainerInneneinrichtung);
                    getContainerInneneinrichtung.appendChild(newDiv);
                    break;

                case "außeneinrichtung":
                    let getContainerAußeneinrichtung: HTMLElement = document.getElementById("außeneinrichtung")!;
                    getContainerAußeneinrichtung.appendChild(newDiv);
                    break;
            }
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

    //Kategorien einblenden/ausblenden
    function handleCategoryClick(this: HTMLElement, _click: MouseEvent): void {
        switch (this.getAttribute("id")) {
            case "inneneinrichtungbtn":
                inneneinrichtungVerweis();
                break;
            case "außeneinrichtungbtn":
                außeneinrichtungVerweis();
                break;
        }
        function inneneinrichtungVerweis(): void {
            (<HTMLElement>document.getElementById("inneneinrichtung")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("außeneinrichtung")).style.display = "none";
        }
        function außeneinrichtungVerweis(): void {
            (<HTMLElement>document.getElementById("außeneinrichtung")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("inneneinrichtung")).style.display = "none";
        }
    }
    function buildNavListener(): void {
        //Erstellen einer Variable, Buttonverlinkung
        let inneneinrichtungButton: HTMLElement = <HTMLElement>document.querySelector("#inneneinrichtungbtn");
        inneneinrichtungButton.addEventListener("click", handleCategoryClick.bind(inneneinrichtungButton));

        let außeneinrichtungButton: HTMLElement = <HTMLElement>document.querySelector("#außeneinrichtungbtn");
        außeneinrichtungButton.addEventListener("click", handleCategoryClick.bind(außeneinrichtungButton));
    }
}

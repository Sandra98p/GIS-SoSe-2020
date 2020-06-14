
namespace Artikel {


    let artikelrechner: number = 0;
    let preisBerechnen: number = 0;

    //Zähler für die Anzahl erstellen
    let anzahlZaehler: HTMLParagraphElement = document.createElement("p");

    //Blase erstellen beim Einkaufswagen
    let produktAnzeige: HTMLDivElement = document.createElement("div");
    produktAnzeige.id = "produktAnzeige";


    let articles: ArtikelProdukte[] = [];
    window.addEventListener("load", init);

    export interface ArtikelProdukte {
        kategorie: string;
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
    }

    //Json Daten werden vom Server gezogen
    function init(): void {
        let url: string = "articles.json";
        communicate(url);
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        console.log("Start");
        let response: Response = await fetch(_url);
        console.log("Response", response);
        articles = await response.json();
        console.log("End");
        buildArticles();
    }


    function sichernImLocalStorage(_inputArticle: ArtikelProdukte): void {
        //Artikel bauen
        let itemString: string = JSON.stringify(_inputArticle);
        let key: string = "" + _inputArticle.name; //in localstorage packen

        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }

    //Produktschleife
    function buildArticles(): void {
        for (let index: number = 0; index < articles.length; index++) {
            console.log(articles[index]);
            //Div erzeugen
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.setAttribute("class", "artikel");
            newDiv.setAttribute("id", "produkt" + index);
            document.getElementById("inneneinrichtung")?.appendChild(newDiv);

            //Produktbild hinzufügen
            let newBild: HTMLElement = document.createElement("img");
            newBild.setAttribute("src", articles[index].bild);
            newBild.setAttribute("alt", "produkt");
            newBild.setAttribute("class", "produktbild");
            document.getElementById("produkt" + index)?.appendChild(newBild);

            //Produktbezeichnung hinzufügen
            let newH3: HTMLHeadingElement = document.createElement("h3");
            newH3.innerHTML = articles[index].name;
            document.getElementById("produkt" + index)?.appendChild(newH3);

            //Produktbeschreibung hinzufügen
            let newP: HTMLParagraphElement = document.createElement("p");
            newP.innerHTML = articles[index].beschreibung;
            document.getElementById("produkt" + index)?.appendChild(newP);

            //Preis hinzufügen
            let newPreis: HTMLHeadingElement = document.createElement("h4");
            newPreis.innerHTML = articles[index].preis + "€";
            document.getElementById("produkt" + index)?.appendChild(newPreis);

            //Button hinzufügen
            let newButton: HTMLButtonElement = document.createElement("button");
            newButton.innerHTML = "Jetzt kaufen";
            newButton.addEventListener("click", einkaufenBtn.bind(articles[index]));
            newButton.setAttribute("name", articles[index].name);
            newButton.setAttribute("img", articles[index].bild);
            newButton.setAttribute("beschreibung", articles[index].beschreibung);
            newButton.setAttribute("preis", articles[index].preis.toString());
            newButton.setAttribute("kategorie", articles[index].kategorie);

            document.getElementById("produkt" + index)?.appendChild(newButton);
            document.getElementById("artikel" + index)?.appendChild(newButton);

            switch (articles[index].kategorie) {
                case "inneneinrichtung":
                    let getContainerInneneinrichtung: HTMLElement = document.getElementById("inneneinrichtung")!;
                    getContainerInneneinrichtung.appendChild(newDiv);
                    break;

                case "außeneinrichtung":
                    let getContainerAußeneinrichtung: HTMLElement = document.getElementById("außeneinrichtung")!;
                    getContainerAußeneinrichtung.appendChild(newDiv);
                    break;
            }
        }




        function einkaufenBtn(this: ArtikelProdukte, _event: Event): void {
            artikelrechner++;
            console.log(artikelrechner);

            sichernImLocalStorage(this);

            preisBerechnen += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
            console.log(preisBerechnen.toFixed(2));

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
                    inneneinrichtung();
                    break;
                case "außeneinrichtungbtn":
                    außeneinrichtung();
                    break;
            }
        }
        function inneneinrichtung(): void {
            (<HTMLElement>document.getElementById("inneneinrichtung")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("außeneinrichtung")).style.display = "none";
        }
        function außeneinrichtung(): void {
            (<HTMLElement>document.getElementById("außeneinrichtung")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("inneneinrichtung")).style.display = "none";
        }


        //Erstellen einer Variable, Buttonverlinkung
        let inneneinrichtungButton: HTMLElement = <HTMLElement>document.getElementById("inneneinrichtungbtn");
        inneneinrichtungButton.addEventListener("click", handleCategoryClick.bind(inneneinrichtungButton));

        let außeneinrichtungButton: HTMLElement = <HTMLElement>document.getElementById("außeneinrichtungbtn");
        außeneinrichtungButton.addEventListener("click", handleCategoryClick.bind(außeneinrichtungButton));

    }
}



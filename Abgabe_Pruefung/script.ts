namespace IceCreamTime {


    let warenanzahl: number = 0;
    let preisrechner: number = 0;

    //Zähler für die Anzahl erstellen
    let auswahlAnzeige: HTMLParagraphElement = document.createElement("p");

    //Produktzähler in grauem Feld hinzufügen
    let kaufeAnzeige: HTMLDivElement = document.createElement("div");
    kaufeAnzeige.id = "kaufeAnzeige";

    let inhaltsDiv: HTMLDivElement;


    let items: Items[] = [];
    window.addEventListener("load", init);

    export interface Items {
        kategorie: string;
        bild: string;
        name: string;
        preis: number;
    }

    //Json Daten werden vom Server gezogen
    function init(): void {
        let url: string = "artikel.json";
        communicate(url);

    }

    async function communicate(_url: RequestInfo): Promise<void> {
        console.log("Willkommen beim Eis-Verkauf");
        let response: Response = await fetch(_url);
        console.log("Response", response);
        items = await response.json();
        console.log("End");
        buildArticles();
    }


    function saveinlocalstorage(_inputArticle: Items): void {
        //Artikel bauen
        let itemString: string = JSON.stringify(_inputArticle);
        let key: string = "" + _inputArticle.name; //in localstorage packen

        localStorage.setItem(key, itemString);
        console.log(localStorage);

    }

    //Produktschleife
    function buildArticles(): void {
        for (let index: number = 0; index < items.length; index++) {
            console.log(items[index]);
            //Div erzeugen
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.setAttribute("class", "artikel");
            newDiv.setAttribute("id", "produkt" + index);
            document.getElementById("eissorten")?.appendChild(newDiv);

            //Produktbild hinzufügen
            let newBild: HTMLElement = document.createElement("img");
            newBild.setAttribute("src", items[index].bild);
            newBild.setAttribute("alt", "produkt");
            newBild.setAttribute("class", "produktbild");
            document.getElementById("produkt" + index)?.appendChild(newBild);

            //Produktbezeichnung hinzufügen
            let newH3: HTMLHeadingElement = document.createElement("h3");
            newH3.innerHTML = items[index].name;
            document.getElementById("produkt" + index)?.appendChild(newH3);

            //Preis hinzufügen
            let newPreis: HTMLHeadingElement = document.createElement("p");
            newPreis.innerHTML = items[index].preis.toFixed(2) + "€";
            document.getElementById("produkt" + index)?.appendChild(newPreis);

            //Button für warenkorb hinzufügen
            let newButton: HTMLButtonElement = document.createElement("button");
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
                    let getContainerEissorten: HTMLElement = document.getElementById("eissorten")!;
                    getContainerEissorten.appendChild(newDiv);
                    break;

                case "verpackung":
                    let getContainerVerpackung: HTMLElement = document.getElementById("verpackung")!;
                    getContainerVerpackung.appendChild(newDiv);
                    break;

                case "extras":
                    let getContainerExtras: HTMLElement = document.getElementById("extras")!;
                    getContainerExtras.appendChild(newDiv);
                    break;
            }

        }


        function kaufenButton(this: Items, _event: Event): void {
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
        function handleCategoryClick(this: HTMLElement, _click: MouseEvent): void {
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
        function eissorten(): void {
            (<HTMLElement>document.getElementById("eissorten")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("verpackung")).style.display = "none";
            (<HTMLElement>document.getElementById("extras")).style.display = "none";
        }
        function verpackung(): void {
            (<HTMLElement>document.getElementById("verpackung")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("eissorten")).style.display = "none";
            (<HTMLElement>document.getElementById("extras")).style.display = "none";
        }
        function extras(): void {
            (<HTMLElement>document.getElementById("extras")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("eissorten")).style.display = "none";
            (<HTMLElement>document.getElementById("verpackung")).style.display = "none";
        }

        //Erstellen einer Variable, Buttonverlinkung
        let eissortenButton: HTMLElement = <HTMLElement>document.getElementById("eissortenbtn");
        eissortenButton.addEventListener("click", handleCategoryClick.bind(eissortenButton));

        let weißweinButton: HTMLElement = <HTMLElement>document.getElementById("verpackungbtn");
        weißweinButton.addEventListener("click", handleCategoryClick.bind(weißweinButton));

        let roseButton: HTMLElement = <HTMLElement>document.getElementById("extrasbtn");
        roseButton.addEventListener("click", handleCategoryClick.bind(roseButton));
    }

}

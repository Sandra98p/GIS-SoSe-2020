namespace IceCreamTime {
    window.addEventListener("load", init);

    let inhaltsDiv: HTMLDivElement;
    let loeschewarenkorb: HTMLParagraphElement;
    let anzeigeGesamtpreis: HTMLParagraphElement;
    let gesamtpreis: number;

    let sendeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bestellenbutton");
    sendeButton.addEventListener("click", sendeBestellung);


    function init(_event: Event): void {
        inhaltsDiv = <HTMLDivElement>document.querySelector(".bestellungsAnzeige");
        anzeigeGesamtpreis = <HTMLParagraphElement>document.querySelector("#preisinsgesamt");
        loeschewarenkorb = <HTMLParagraphElement>document.querySelector("#allesloeschen");
        loeschewarenkorb.addEventListener("click", handleRemoveAll);
        

        console.log(localStorage);
        update();
    }

    function update(): void {
        inhaltsDiv.innerHTML = "";
        gesamtpreis = 0;
        for (let index: number = 0; index < localStorage.length; index++) {
            let key: string = <string>localStorage.key(index);
            let artikelJson: string = <string>localStorage.getItem(key);

            let item: Items = <Items>JSON.parse(artikelJson);

            gesamtpreis += item.preis;
            
        }
        setGesamtpreis();
    }


    function createContent(_inputArticle: Items): void {
        //erstelle Div
        let newDiv: HTMLDivElement = document.createElement("div");
        inhaltsDiv.appendChild(newDiv);
        newDiv.id = _inputArticle.name;
        console.log(newDiv.id);

        //Bild erstellen
        let bildElement: HTMLImageElement = document.createElement("img");
        bildElement.src = _inputArticle.bild;
        newDiv.appendChild(bildElement);
        console.log(bildElement);

        //Namen geben
        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = _inputArticle.name;
        newDiv.appendChild(name);

        //Preis festlegen
        let preisDiv: HTMLParagraphElement = document.createElement("p");
        preisDiv.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", preisDiv.innerHTML);
        newDiv.appendChild(preisDiv);

        //Button
        let loeschen: HTMLButtonElement = document.createElement("button");
        loeschen.innerHTML = "Löschen";
        newDiv.appendChild(loeschen);
        loeschen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }


    function handleRemoveArticle(this: Items, _event: Event): void {
        localStorage.removeItem(this.name);
        update();
    }

    //Gesamtpreis in Header plazieren
    function setGesamtpreis(): void {
        anzeigeGesamtpreis.innerHTML = "" + gesamtpreis.toFixed(2) + "€";
    }

    //Lösche alle Artikel
    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        update();
    }

    async function sendeBestellung(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gistestsose2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }
}
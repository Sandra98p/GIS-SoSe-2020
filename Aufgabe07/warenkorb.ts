namespace Artikel {
    window.addEventListener("load", init);

    let contentDiv: HTMLDivElement;
    let pGesamtpreis: HTMLParagraphElement;
    let gesamtPreis: number;

    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector(".warenliste");
        pGesamtpreis = <HTMLParagraphElement>document.querySelector("#total");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);

        console.log(localStorage);
        update();
    }

    function update(): void {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index: number = 0; index < localStorage.length; index++) {
            let key: string = <string>localStorage.key(index);
            let articleJson: string = <string>localStorage.getItem(key);

            let item: ArtikelProdukte = <ArtikelProdukte>JSON.parse(articleJson);

            gesamtPreis += item.preis;
            erstelleInhalt(item);
        }
        setGesamtpreis();
    }


    function erstelleInhalt(_inputArticle: ArtikelProdukte): void {
        //Div erstellen
        let newDiv: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputArticle.name;
        console.log(newDiv.id);

        //Bild erstellen
        let bildElement: HTMLImageElement = document.createElement("img");
        bildElement.src = _inputArticle.bild;
        newDiv.appendChild(bildElement);
        console.log(bildElement);

        //Namen geben
        let name: HTMLParagraphElement = document.createElement("h3");
        name.innerHTML = _inputArticle.name;
        newDiv.appendChild(name);

        //Preis festlegen
        let price: HTMLParagraphElement = document.createElement("p");
        price.innerHTML = "" + _inputArticle.preis;
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);

        //Button
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }


    function handleRemoveArticle(this: ArtikelProdukte, _event: Event): void {
        localStorage.removeItem(this.name);
        update();
    }

    //Gesamtpreis in Header plazieren
    function setGesamtpreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtPreis;
    }


    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        update();
    }
}
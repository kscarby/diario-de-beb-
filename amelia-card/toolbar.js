function toolbar () {

    const addClass = function addClass (el, className) {
    
        el.className = className;
    }

    const card = document.createElement("div");
		const cardBack = document.createElement("div");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");
    const button4 = document.createElement("button");

    const inicio = function () {

        card.appendChild(button1);
        addClass(button1,"button-inicio");
        button1.onclick = function () {
            window.location="http://127.0.0.1:5500/amelia-card/home.html";
            
        }
    }

    const buttonPictures = function () {

        card.appendChild(button3);
        addClass(button3,"button-fotos");
        button3.onclick = function () {
            window.location="http://127.0.0.1:5500/amelia-card/pictures.html";
        }
    }

		const buttonCards = function () {

			card.appendChild(button4);
			addClass(button4,"button-cards");
			button4.onclick = function () {
					window.location="http://127.0.0.1:5500/amelia-card/cards.html";
			}
	}

	const buttonBack = function () {

		cardBack.appendChild(button2);
    addClass(button2,"button-voltar");
		
		button2.onclick = function () {
			window.history.back();
		}
	}
	
	app.appendChild(card);
	app.appendChild(cardBack);
	
	
	addClass(cardBack, "cardBack");
	addClass(card,"card");

	inicio();
	buttonPictures();
	buttonCards();
	buttonBack();

}

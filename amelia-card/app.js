(function application () {

    const app = document.getElementById("app");

    toolbar();

    const addClass = function (el, className) {
        
        el.className = className;
    }

    const box = document.createElement("div");
    box.setAttribute("id", "box");
    
    const icons = document.createElement("div");
    const newWelcome = document.createElement("h1");
    const newImage = document.createElement("button");
    const newCard = document.createElement("button");
    newWelcome.innerText = "Diário da Amélia";
    newImage.innerText = "Add Fotos";
    newCard.innerText = "Add Conquistas";

    addClass(newWelcome,"newWelcome");
    addClass(newImage,"newImage");
    addClass(newCard,"newCard");
    addClass(box,"box");

    
    app.appendChild(box);
    box.appendChild(newWelcome);
    box.appendChild(newImage);
    box.appendChild(newCard);
    
        
})()

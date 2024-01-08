(function() {
	toolbar();
  
	const addClass = function addClass(el, className) {
	  el.className = className;
	}
  
	const cardList = [];
	const tabList = [];
  
	const toolbarCards = document.createElement("div");
	const boxApp = document.getElementById("app");
  
	const boxCards = document.createElement("div");
	const boxCards1 = document.createElement("div");
	const boxCards2 = document.createElement("div");
  
	//formulario
	const CardItem = function () {
	  const cardForm = document.createElement("div");

	  const startForm = document.createElement("button");
	  startForm.innerText = "Adcionar nova conquista";
	  addClass(startForm, "startForm");

	  let isFirstClick = true;
		startForm.onclick = function () {
			if (isFirstClick) {
				cardForm.style.display = "grid";
				startForm.style.display = "none";
			  }
		}



	  addClass(cardForm, "cardForm");
  
	  const dateText = document.createElement("input");
	  const text = document.createElement("textarea");
	  const addPicture = document.createElement("input");
	  const imageInput = document.createElement("img"); // Novo elemento para exibir a imagem selecionada
  
	  addClass(text, "text");
	  addClass(dateText, "dateText");
	  addClass(addPicture, "addPicture");
	  addClass(imageInput, "imageInput");
  
	  dateText.setAttribute("type", "date");
	  dateText.setAttribute("id", "dateText");
  
	  addPicture.setAttribute("type", "file");
	  addPicture.setAttribute("id", "addPicture");
  
	  text.setAttribute("id", "text");
	  text.setAttribute("rows", "3");
	  text.setAttribute("cols", "92");
	  text.setAttribute("placeholder", "Digite aqui sua anotação...");
  
	  const submit = document.createElement("button");
	  addClass(submit, "submit");
	  submit.innerText = "Add";
  
	  submit.onclick = function () {
		const dateFormat = function (inputDate) {
		  const data = new Date(inputDate);
		  const dia = String(data.getDate() + 1).padStart(2, '0');
		  const mes = String(data.getMonth() + 1).padStart(2, '0');
		  const ano = data.getFullYear();
  
		  return `${dia}/${mes}/${ano}`;
		}
  
		const newDate = document.createElement("p");
		newDate.setAttribute("id", "newDate");
		addClass(newDate, "newDate");
  
		const newItem = document.createElement("p");
		newItem.setAttribute("id", "newItem");
		addClass(newItem, "newItem");
  
		const dateResult = document.querySelector('#dateText').value;
		const result = document.querySelector('#text').value;
  
		newDate.innerText = dateFormat(dateResult);
		newItem.innerText = result;
  
		const img = document.getElementById('addPicture');
		const imagePreview = document.createElement("img");
		addClass(imagePreview, 'imagePreview');
		imagePreview.classList.add('imagePreview');
		
		if (img.files && img.files[0]) {
		  const file = img.files[0];
		  const reader = new FileReader();
		  reader.onload = function(event) {
			imagePreview.src = event.target.result;
		  }
		  reader.readAsDataURL(file);
		}
  
		const cardItem = document.createElement("div");
		addClass(cardItem, "cardItem");
		cardItem.appendChild(newDate);
		cardItem.appendChild(newItem);
		cardItem.appendChild(imagePreview); // Adiciona a imagem ao card
		boxCards2.appendChild(cardItem);
		//boxCards1.insertBefore(cardItem, cardForm);

		cardList.push({ id: 0, newItem, newDate, imagePreview });
		console.log(cardList);
		cardForm.style.display = "none";
		startForm.style.display = "grid";
	  }
	  
	  boxCards.appendChild(boxCards1);
	  boxCards1.appendChild(startForm);
	  boxCards1.appendChild(cardForm);
	  cardForm.appendChild(dateText);
	  cardForm.appendChild(text);
	  cardForm.appendChild(addPicture);
	  cardForm.appendChild(submit);
  
	  
	}

	//Card list
	const blocCard = function () {

		const cardItem = document.createElement("div");
		const nome = document.createElement("p");
		const time = document.createElement("p");
		const weight = document.createElement("p");
		const head = document.createElement("p");
		const imgg = document.createElement('img');

		cardItem.innerText = "23/04/2021";
		nome.innerText = "Amélia Costa Veras";
		time.innerText = "Nasci às 00:05hs";
		weight.innerText = "Com peso de 3,040 gramas";
		head.innerText = "Perímetro cefálico de 34cm";
		imgg.src = "assets/amelia/img (1).jpg";

		addClass(cardItem, "cardItem");
		cardItem.setAttribute("id", "cardItem");

		imgg.setAttribute("id", "imgg");
		
		boxCards.appendChild(boxCards2);
		boxCards2.appendChild(cardItem);
		cardItem.appendChild(nome);
		cardItem.appendChild(time);
		cardItem.appendChild(weight);
		cardItem.appendChild(head);
		cardItem.appendChild(imgg);
		
		cardList.push(cardItem);
		
	}

	//Tab list - carrossel
	const blocTabs = function () {
		const boxTabs = document.createElement("div");
		addClass(boxTabs, "boxTabs");

		for (let j=0; j<=4; j++) {
			const tab = document.createElement("button");
			
			addClass(tab, "tab");
			tab.innerText = "Mês " + j;
			tabList.push(tab);

			tab.onclick = function () {
				window.location="http://127.0.0.1:5500/amelia-card/home.html";
			}			

			boxTabs.appendChild(tab);

		}

		boxApp.appendChild(boxTabs);

	}

	addClass(toolbarCards, "toolbarCards");
	addClass(boxApp, "boxApp");
	addClass(boxCards, "boxCards");
	addClass(boxCards1, "boxCards1");
	addClass(boxCards2, "boxCards2");
	
	boxApp.appendChild(toolbarCards);
	boxApp.appendChild(boxCards);
	boxApp.appendChild(boxCards1);
	boxApp.appendChild(boxCards2);

	CardItem();
	blocTabs();
	blocCard();

		
})()
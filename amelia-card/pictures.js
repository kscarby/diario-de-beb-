(function() {
	toolbar();
	
	const addClass = function addClass (el, className) {
    
		el.className = className;
	}

	const pictures = document.getElementById("app");
	const boxPictures = document.createElement("div");
	addClass(boxPictures, "boxPictures");
	


	for(let i=1; i <= 12; i++) {
  
		var img = document.createElement("img");
		var DeleteIcon = document.createElement("img");
		var FavoriteIcon = document.createElement("img");
		var NotFavoriteIcon = document.createElement("img");
		var boxImg = document.createElement("div");
		var toolbarImg = document.createElement("div");

		addClass(boxImg, "boxImg");
		addClass(img, "img");
		addClass(toolbarImg, "toolbarImg");
		addClass(FavoriteIcon, "FavoriteIcon");
		addClass(NotFavoriteIcon, "NotFavoriteIcon");
		addClass(DeleteIcon, "DeleteIcon");

		img.src = "assets/amelia/img " + "(" + i + ")" + ".jpg";
		FavoriteIcon.src = "assets/icons/favorite_black_24dp.svg";
		NotFavoriteIcon.src = "assets/icons/favorite_border_black_24dp.svg";
		DeleteIcon.src = "assets/icons/delete_black_24dp (1).svg";
		
		pictures.appendChild(boxPictures);
		boxPictures.appendChild(boxImg);
		boxImg.appendChild(img);
		boxImg.appendChild(toolbarImg);
		toolbarImg.appendChild(NotFavoriteIcon);
		toolbarImg.appendChild(DeleteIcon);

	}
		
})()

// Initialiser le container
let container = document.getElementById("teddie_container");
let option = document.getElementById("option");
let container2 = document.getElementById("teddie_container2");


//Récuperer id

let params = new URLSearchParams(document.location.href.split("?")[1]);

let url = params.get("id_teddy");

fetch("http://localhost:3000/api/teddies/" + url)
	.then((response) => response.json())
	.then((ourson) => {
		// Création de la div
		let divProduct = document.createElement("div");
		divProduct.classList.add("card");
		container.appendChild(divProduct);

		//Ajout de l'image
		let teddyImg = document.createElement("img");
		teddyImg.classList.add("card-img");
		teddyImg.setAttribute("src", ourson.imageUrl);
		divProduct.appendChild(teddyImg);
		console.log(teddyImg);

		// Ajout du nom produit h2
		let h2Teddy = document.createElement("h2");
		h2Teddy.classList.add("card-title", "mt-3");
		h2Teddy.innerHTML = ourson.name;
		divProduct.appendChild(h2Teddy);

		// Ajout du prix du produit 1er paragraphe
		let pTeddy = document.createElement("p");
		pTeddy.classList.add("card-prix", "h4","mt-3");
		pTeddy.innerHTML = "Prix : " + " " + ourson.price / 100 + " €";
		divProduct.appendChild(pTeddy);

		// Ajout de la description du produit en 2eme paragaraphe
		let descriptionTeddy = document.createElement("p");
		descriptionTeddy.classList.add("card-description", "h6","pb-3", "mt-3");
		descriptionTeddy.innerHTML = ourson.description;
		divProduct.appendChild(descriptionTeddy);

		//boucle for pour la récupération des couleurs
		for (let i = 0; i < ourson.colors.length; i++) {
			let colorsOption = document.createElement("option");
			option.classList.add("choix", "h5");
			option.appendChild(colorsOption);
			colorsOption.setAttribute("value", i);
			colorsOption.textContent = ourson.colors[i];
		}

		//créer le bouton: ajouter au panier
		let divcontainer2 = document.createElement("btn");
		teddie_container2.appendChild(divcontainer2);

		let lienPanier = document.createElement("a");
		lienPanier.classList.add("btn", "h4");
		// lienPanier.classList.add("btn_centre");
		lienPanier.innerHTML = "Ajouter au panier";
		divcontainer2.appendChild(lienPanier);

		// Ecoute de l'évènement valider la commande
		lienPanier.onclick = function () {
			let select = document.querySelector("select");

			let choixCouleur = select.selectedIndex;
			if (choixCouleur == 0) {
				alert("Vous devez personnalisé votre ourson !");
			} else {
				let teddiePanier = {
					id: ourson._id,
					name: ourson.name,
					price: ourson.price,
					colors: document.getElementById("option").options[document.getElementById('option').selectedIndex].text,
					description: ourson.description,
					imageUrl: ourson.imageUrl,
				};

				//reconversion du js en JSON et ajout au LocalStorage
				let oursonPanier = JSON.stringify(teddiePanier);
				localStorage.setItem(ourson._id, oursonPanier);
				alert((message = "vos articles ont bien été ajouté au panier"));
			}
		};
	})
	.catch((error) => console.log(error));

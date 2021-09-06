// Initialiser le container
let container = document.getElementById("teddies_container");

// Récupération de l'api
fetch("http://localhost:3000/api/teddies")
	//Exploiter le résultat d’une promesse avec les méthodes then() et catch()
	.then((response) => response.json()) //convertir response en données JSON  avec la methode json()):
	.then((teddies) => {
		//traiter les données JSON
		// Récupération des produits et affichage des données sur la page html
		for (let i = 0; i < teddies.length; i++) {
			// Création de div produit
			let card = document.createElement("div");
			card.classList.add("col-lg-4", "col-md-6","py-2", "m-3");
			container.appendChild(card);

			//Ajout de l'image produit
			let imgTeddy = document.createElement("img");
			imgTeddy.classList.add("card-img-top");
			imgTeddy.setAttribute("src", teddies[i].imageUrl);
			card.appendChild(imgTeddy);

			// Ajout du nom du body card
			let cardbody = document.createElement("div");
			cardbody.classList.add("card-body");
			card.appendChild(cardbody);

			// Ajout du nom du produit h2
			let h2Teddy = document.createElement("h2");
			h2Teddy.classList.add("card-title");
			h2Teddy.innerHTML = teddies[i].name;
			cardbody.appendChild(h2Teddy);
			
			// Ajout divPrix
			let divPrix = document.createElement("div");
			divPrix.classList.add("priceR", "d-flex","justify-content-between");
			cardbody.appendChild(divPrix);
		
			// Ajout du prix du produit
			let prixTitre = document.createElement("p");
			prixTitre.classList.add("prix");
			prixTitre.innerHTML = "Prix" + " " + ":";
			divPrix.appendChild(prixTitre);

			// Ajout du prix du produit
			let prixTeddy = document.createElement("p");
			prixTeddy.classList.add("card-prix");
			prixTeddy.innerHTML = teddies[i].price / 100 + " €";
			divPrix.appendChild(prixTeddy);

			//création du lien vers le produit
			let linkTeddy = document.createElement("a");
			linkTeddy.classList.add("btn", "card-link","justify-content-center");
			linkTeddy.href = "pagesHTML/product.html?id_teddy=" + teddies[i]._id;
			linkTeddy.innerHTML = "En savoi plus";
			cardbody.appendChild(linkTeddy);
		}
	})
	.catch((error) => console.log(error));//va être appelée si la promesse est rompue.

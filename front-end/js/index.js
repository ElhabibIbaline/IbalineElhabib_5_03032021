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
			card.classList.add("col-lg-3", "col-ta-3", "py-2", "m-3");
			container.appendChild(card);

			//Ajout de l'image produit
			let imgTeddy = document.createElement("img");
			imgTeddy.classList.add("card-img-top");
			imgTeddy.setAttribute("src", teddies[i].imageUrl);
			imgTeddy.href = "pagesHTML/product.html?id_teddy=" + teddies[i]._id;
			card.appendChild(imgTeddy);

			// Ajout du nom du body card
			let cardbody = document.createElement("div");
			cardbody.classList.add("card-body", "d-flex", "justify-content-between","align-item-center", "bg-sec");
			card.appendChild(cardbody);

		// Ajout du nom du produit h2
			let h2Teddy = document.createElement("h2");
			h2Teddy.classList.add("card-title", "h2");
			h2Teddy.innerHTML = teddies[i].name;
			h2Teddy.link = "pagesHTML/product.html?id_teddy=" + teddies[i]._id;
			cardbody.appendChild(h2Teddy);

			// Ajout du prix du produit
			let prixTeddy = document.createElement("p");
			prixTeddy.classList.add("card-prix", "h2");
			prixTeddy.innerHTML = teddies[i].price / 100 + " €";
			cardbody.appendChild(prixTeddy);

			//création du lien vers le produit
			let linkTeddy = document.createElement("a");
			linkTeddy.classList.add("btn", "card-link","mt-3","justify-content-center");
			linkTeddy.href = "pagesHTML/product.html?id_teddy=" + teddies[i]._id;
			linkTeddy.innerHTML = "En savoi plus";
			card.appendChild(linkTeddy);
		}
	})
	.catch((error) => console.log(error));//va être appelée si la promesse est rompue.

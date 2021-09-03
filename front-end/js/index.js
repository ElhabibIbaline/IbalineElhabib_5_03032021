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
			let containerArticle = document.createElement("div");
			containerArticle.classList.add(
				"article",
				"col-12",
				"col-md-6",
				"col-lg-4",
				"mb-3"
			);
			containerArticle.classList.add("card");
			container.appendChild(containerArticle);

			//Ajout de l'image produit
			let imgTeddy = document.createElement("img");
			imgTeddy.classList.add("card-img-top");
			imgTeddy.setAttribute("src", teddies[i].imageUrl);
			containerArticle.appendChild(imgTeddy);

			// Ajout du nom du produit h2
			let h2Teddy = document.createElement("h2");
			h2Teddy.classList.add("card-title");
			h2Teddy.innerHTML = teddies[i].name;
			containerArticle.appendChild(h2Teddy);

			// Ajout du prix du produit
			let prixTeddy = document.createElement("p");
			prixTeddy.classList.add("card-prix");
			prixTeddy.innerHTML = teddies[i].price / 100 + " €";
			containerArticle.appendChild(prixTeddy);

			//création du lien vers le produit
			let linkTeddy = document.createElement("a");
			linkTeddy.classList.add("btn");
			linkTeddy.classList.add("btn__centre");
			linkTeddy.href = "pagesHTML/product.html?id_teddy=" + teddies[i]._id;
			linkTeddy.innerHTML = "En savoi plus";
			containerArticle.appendChild(linkTeddy);
		}
	})
	.catch((error) => console.log(error));//va être appelée si la promesse est rompue.

// Initialiser le container
let container = document.getElementById("teddies_container");

// Récupération de l'api
fetch("http://localhost:3000/api/teddies")
	.then((response) => response.json())
	.then((teddies) => {
		// Récupération des produits et affichage des données sur la page html
		for (let i = 0; i < teddies.length; i++) {
			// Création de div produit
			let divcontainer = document.createElement("div");
			divcontainer.classList.add("article");
			divcontainer.classList.add("col-lg-5");
			container.appendChild(divcontainer);

			//Ajout de l'image produit
			let imgTeddy = document.createElement("img");
			imgTeddy.classList.add("card-img");
			imgTeddy.setAttribute("src", teddies[i].imageUrl);
			divcontainer.appendChild(imgTeddy);

			// Ajout du nom du produit h2
			let h2Teddy = document.createElement("h2");
			h2Teddy.classList.add("card-title");
			h2Teddy.innerHTML = teddies[i].name;
			divcontainer.appendChild(h2Teddy);

			// Ajout de la description du produit
			let descriptionTeddy = document.createElement("p");
			descriptionTeddy.classList.add("card-prix");
			descriptionTeddy.innerHTML = teddies[i].description;
			divcontainer.appendChild(descriptionTeddy);

			// Ajout du prix du produit
			let prixTeddy = document.createElement("p");
			prixTeddy.classList.add("card-prix");
			prixTeddy.innerHTML = teddies[i].price / 100 + " €";
			divcontainer.appendChild(prixTeddy);
		}
	})
	.catch((error) => console.log(error));

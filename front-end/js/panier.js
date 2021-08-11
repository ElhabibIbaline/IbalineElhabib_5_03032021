// Initialiser les containers
let containerPanier = document.getElementById("teddies_panier");

// Création du tableau products
let productsId = [];

// récupération du localStorage
let oursonPanier = Object.keys(localStorage);
for (i=0; i < oursonPanier.length; i++) {

	//transformer chaîne JSON en un objet JavaScript
	let ourson = JSON.parse(localStorage.getItem(oursonPanier[i]));

	// Création de la div
	let divcontainerpanier = document.createElement("div");
	divcontainerpanier.classList.add("bordure");
	divcontainerpanier.classList.add("col-lg-5");
	containerPanier.appendChild(divcontainerpanier);

	//Ajout de l'image
	let imgTeddy = document.createElement("img");
	imgTeddy.classList.add("card-img");
	imgTeddy.setAttribute("src", ourson.imageUrl);
	divcontainerpanier.appendChild(imgTeddy);

	// Ajout du name product
	let nameTeddy = document.createElement("h2");
	nameTeddy.classList.add("card-title");
	nameTeddy.innerHTML = ourson.name;
	divcontainerpanier.appendChild(nameTeddy);

	// Ajout du prix
	let prixTeddy = document.createElement("p");
	prixTeddy.classList.add("card-prix");
	prixTeddy.innerHTML = "prix" + " " + ourson.price / 100 + " €";
	divcontainerpanier.appendChild(prixTeddy);

	// Push Id de l'ourson dans le tableau products
	productsId.push(ourson.id);
}
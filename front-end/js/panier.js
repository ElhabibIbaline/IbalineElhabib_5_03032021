// Initialiser les containers
let containerPanier = document.getElementById("teddies_panier");
let prixPanier = document.getElementById("panierTotal");

// Création du tableau products
let productsId = [];

// création de la variable totalpanier
let totalPanier = 0;

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
	prixTeddy.innerHTML = "Prix" + " " + ourson.price / 100 + " €";
	divcontainerpanier.appendChild(prixTeddy);

	    // Calcul du montant total
    totalPanier = totalPanier + (ourson.price/100 * 1);

	// Push Id de l'ourson dans le tableau products
	productsId.push(ourson.id);
}

// Affichage du montant total de la commande
let montantTotal = document.createElement("p");
montantTotal.classList.add("col-lg-12");
montantTotal.classList.add("prix");
montantTotal.innerHTML = "Montant total de la commande" + " " + totalPanier + " €";
prixPanier.appendChild(montantTotal);
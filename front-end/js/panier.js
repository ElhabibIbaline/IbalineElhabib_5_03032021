// Initialiser les containers
let containerPanier = document.getElementById("teddies_panier");
let prixPanier = document.getElementById("panierTotal");

// Création du tableau products
let productsId = [];

// création de la variable totalpanier
let totalPanier = 0;

// récupération du localStorage
let oursonPanier = Object.keys(localStorage);
for (i = 0; i < oursonPanier.length; i++) {
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
	// Ajout de couleur
	let clrseddy = document.createElement("p");
	clrseddy.classList.add("card-title");
	clrseddy.innerHTML = "Couleur :" + " " + ourson.colors;
	divcontainerpanier.appendChild(clrseddy);
	// Ajout du prix
	let prixTeddy = document.createElement("p");
	prixTeddy.classList.add("card-prix");
	prixTeddy.innerHTML = "Prix" + " " + ourson.price / 100 + " €";
	divcontainerpanier.appendChild(prixTeddy);

	// Calcul du montant total
	totalPanier = totalPanier + (ourson.price / 100) * 1;

	// Push Id de l'ourson dans le tableau products
	productsId.push(ourson.id);
}

// Affichage du montant total de la commande
let montantTotal = document.createElement("p");
montantTotal.classList.add("card-title");
montantTotal.innerHTML =
	"Montant total de votre commande est de :" + " " + totalPanier + " €";
prixPanier.appendChild(montantTotal);

//construire l'objet "order" avec le localStorage
//récupérer le bouton html
//lui associer une fonction qui va faire un fetch (POST) avec comme paramètre "order"
//récupérer le retour du fetch pour l'afficher sur une page "confirmationCommande.html"

//Création de la classe client avec la methode constructor
class Client {
	constructor(firstName, lastName, address, city, email) {
		(this.firstName = firstName),
			(this.lastName = lastName),
			(this.address = address),
			(this.city = city),
			(this.email = email);
	}
}

//Création de l'objet client
let form = document.querySelector("#validationCommande");

//valider le formulaire avant de l'envoyer au serveur

form.addEventListener("submit", (e) => {
	// vérifier les champs du formulaire

	// vérifier la validité de firstName
	if (
		!document
			.querySelector("#firstName")
			.value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)
	) {
		alert("Veuillez corriger le nom");
		window.location = "panier.html";
	}
	// vérifier la validité de fastName
	if (
		!document
			.querySelector("#lastName")
			.value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)
	) {
		alert("Veuillez corriger le prénom");
		window.location = "panier.html";
	}
	// vérifier la validité de l'adress
	if (
		!document
			.querySelector("#address")
			.value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)
	) {
		alert("L'adresse n'est pas valide");
		window.location = "panier.html";
	}
	// vérifier la validité de la ville
	if (
		!document
			.querySelector("#city")
			.value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)
	) {
		alert("Votre ville contient des erreurs");
		window.location = "panier.html";
	}
	// vérifier la validité de l'email
	if (
		!document
			.querySelector("#email")
			.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
	) {
		alert("Votre email contient des erreurs");
		window.location = "panier.html";
	}

	//création du nouveau client
	let newClient = new Client(
		document.querySelector("#firstName").value,
		document.querySelector("#lastName").value,
		document.querySelector("#address").value,
		document.querySelector("#city").value,
		document.querySelector("#email").value,
	);

	// Création de l'objet résultat
	let resultat = {
		contact: {
			firstName: newClient.firstName,
			lastName: newClient.lastName,
			address: newClient.address,
			city: newClient.city,
			email: newClient.email,
		},
		products: productsId,
	};

	// Apelle de fetch avec order
	fetch("http://localhost:3000/api/teddies/order", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(resultat),
	})
		//réponse du serveur
		.then((response) => response.json())
		.then((response) => {
			localStorage.clear();
			let objCommande = {
				idCommande: response.orderId,
				prixTotal: totalPanier,
			};
			let commande = JSON.stringify(objCommande);
			localStorage.setItem("commande", commande);
			window.location = "confirmation.html";
		});
});

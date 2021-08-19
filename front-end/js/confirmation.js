// Initialiser les containers
let confirmation = document.getElementById("confirmationCommande");

//Récupération localstorage
let commande = Object.keys(localStorage);
console.log(Object.keys(commande));

for (i = 0; i < commande.length; i++) {
	//Utilisation de la methode getItem pour récuperer les données
	let recapCommande = JSON.parse(localStorage.getItem(commande[i]));

	//création de la div
	let divConfirmation = document.createElement("div");
	confirmation.appendChild(divConfirmation);

	//h2: message de remerciement
	let remerciement = document.createElement("h2");
	remerciement.classList.add("message");
	remerciement.innerHTML =
		"Nous vous remerçions pour votre commande, elle sera livrée dans les meilleurs délais!";
	confirmation.appendChild(remerciement);

	//h3: le récapitulatif de la commande
	let recapitulatif = document.createElement("h3");
	recapitulatif.classList.add("recapitulatif");
	recapitulatif.innerHTML = "Voici le récapitulatif de votre commande :";
	confirmation.appendChild(recapitulatif);

	//p: identifiant de la commande
	let id = document.createElement("p");
	id.classList.add("paragraphe");
	id.innerHTML = "Identifiant de la commande : " + recapCommande.idCommande;
	confirmation.appendChild(id);
    console.log(id)

	// p: montant total de la commande
	let prix = document.createElement("p");
	prix.classList.add("paragraphe");
	prix.innerHTML =
		"Le prix total de votre commande est de : " + recapCommande.prixTotal + " €";
	confirmation.appendChild(prix);
}
localStorage.clear();


const affichageName = document.querySelector("#name");
const affichageImg = document.querySelector("#imgNorbert");
const affichageDescription = document.querySelector("#description");
const affichagePrice = document.querySelector("#price");
const affichageColors = document.querySelector("#colors");

console.log(affichageName);
console.log(affichageImg);
console.log(affichageDescription);
console.log(affichagePrice);
console.log(affichageColors);

const promise01 = fetch("http://localhost:3000/api/teddies");

promise01.then((response) => {
	console.log(response);
	const dataTeddy = response.json();
	console.log(dataTeddy);
	dataTeddy.then((ourson) => {
		console.log(ourson[0]);

		const nameTeddy = ourson[0].name;
		const imgNorbert = ourson[0].imageUrl;
		const priceNorbert = ourson[0].price;
		const descriptionNorbert = ourson[0].description;
		const colorsNorbert = ourson[0].colors;

		console.log(nameTeddy);
		console.log(imgNorbert);
		console.log(priceNorbert);
		console.log(descriptionNorbert);
		console.log(colorsNorbert);

		affichageName.innerHTML = nameTeddy;
		affichageImg.innerHTML = imgNorbert;
		affichageDescription.innerHTML = descriptionNorbert;
		affichagePrice.innerHTML = priceNorbert;
		affichageColors.innerHTML = colorsNorbert;
	});
});

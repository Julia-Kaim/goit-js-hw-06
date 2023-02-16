const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];
// W HTML znajduje się pusta lista ul#ingredients.

// <ul id="ingredients"></ul>

// W JavaScript znajduje się tablica ciągów.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Napisz skrypt, który dla każdego elementu tablicy ingredients:

// Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
// Doda nazwę elementu jako jego zawartość tekstową.
// Doda do elementu klasę item.
// Po czym umieści wszystkie <li> na liście podczas jednej operacji ul#ingredients.



const findList = document.querySelector("#ingredients");
console.log(findList);
console.log(ingredients);

const makingList = ingredients.map((ingredient) => {
	const creatingLi = document.createElement("li");
	creatingLi.textContent = ingredient;
	creatingLi.classList.add("item");
	return creatingLi;
});

findList.append(...makingList);

findList.style.cssText = `
list-style: none;

`;
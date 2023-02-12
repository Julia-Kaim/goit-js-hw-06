// Zadanie 1
// W HTML znajduje się lista kategorii ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>

// Napisz skrypt, który:

// Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).
// W konsekwencji, w wierszu poleceń znajdą się takie komunikaty.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const findh2 = document.querySelectorAll("h2");
// console.log([...findh2]);
// const count = document.querySelectorAll("li.item");
// console.log([...count].length);

// // wyszukanie wszystkich li
// const findList = document.querySelectorAll("li.item ul li");
// console.log([...findList].length);
// // 12

// const findh2 = document.querySelectorAll("h2");
// console.log([...findh2]);
// const count = document.querySelectorAll("li.item");
// console.log([...count].length);
// const findItems = document.querySelectorAll(" li.item ul li");
// console.log([...findItems]);
// const findList = document.querySelectorAll("li.item ul li");
// console.log([...findList].length);

const findCategory = document.querySelector("ul#categories");

const findItem = findCategory.querySelector("li.item");
const itemArray = [];
itemArray.push(findItem);
console.log([...itemArray]);
console.log(`Number of categories: ${itemArray.length}`);

itemArray.forEach((category) => {
	const header = category.querySelector("h2");
	const items = category.querySelectorAll("li");

	console.log(`Category: ${header.textContent}`);
	console.log(`Elements: ${items.length}`);
});

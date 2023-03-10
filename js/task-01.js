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


// =====================
//  first method
// const findArrayCategories = document.querySelectorAll(".item");

// console.log(`Number of categories: ${findArrayCategories.length}`);

// findArrayCategories.forEach((item) => {
// 	console.log(`Category: ${item.firstElementChild.textContent}`);
// 	console.log(`Elements: ${item.lastElementChild.children.length}`);
// });


// ====================
// second method

const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);
numberOfCategories.forEach((item) => {
	console.log(`Category: ${item.querySelector("h2").textContent}`);
	console.log(`Elements: ${item.querySelectorAll("li").length}`);
});

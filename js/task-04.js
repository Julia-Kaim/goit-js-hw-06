// Licznik składa się ze spana i przycisków, które, po ich kliknięciu, powinny zwiększać i zmniejszać jego wartość na jednostkę.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i inicjalizuj wartość 0.
// Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj wartość licznika.
// Aktualizuj interfejs nową wartością zmiennej counterValue.

let counterValue = 0;
const minus = document.querySelector("button[data-action='decrement']");
const plus = document.querySelector("button[data-action='increment']");
const value = document.querySelector("#value");

const subtraction = () => {
	counterValue -= 1;
	value.textContent = counterValue;
};

const addition = () => {
	counterValue += 1;
	value.textContent = counterValue;
};

minus.addEventListener("click", subtraction);
plus.addEventListener("click", addition);

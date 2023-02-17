function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Napisz skrypt, który zmienia kolor tła elementu <body> poprzez style inline po kliknięciu na button.change-color i wprowadza wartość koloru do span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.


const bodyColor = document.querySelector("body");

const changeColor = document.querySelector(".change-color");

const color = document.querySelector(".color");


const backgroundColor = (() => {
	bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
	color.textContent = getRandomHexColor();
});

changeColor.addEventListener("click", backgroundColor);



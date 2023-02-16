// Napisz skrypt, który reaguje na zmianę wartości input#font-size-control (zdarzenie input) i zmienia styl inline span#text aktualizując właściwość font-size. W rezultacie, podczas przeciągania paska przesuwania będzie zmieniał się rozmiar tekstu.


const sizeInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

const reSize = (event) => {
	textSpan.style.fontSize = `${event.target.value}px`;
};

sizeInput.addEventListener("input", reSize);

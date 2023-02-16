// Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza jego zawartość na prawidłową liczbę wprowadzonych symboli.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Informacja o liczbie symboli, która powinna znajdować się w polu input, pokazuje się w jego atrybucie data-length.
// Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielone, a jeśli liczba jest nieprawidłowa - czerwone.
// Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.

const textInput = document.querySelector("#validation-input");

const onBlur = (event) => {
	const input1 = event.currentTarget;
	const inputLength = Number(input1.dataset.length);
	if (input1.value.length === inputLength) {
		input1.classList.remove("invalid");
		input1.classList.add("valid");
	} else {
		input1.classList.remove("valid");
		input1.classList.add("invalid");
	}
};
textInput.addEventListener("blur", onBlur);



// ============
// konspekt

// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
// 	textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
// 	textInput.blur();
// });

// textInput.addEventListener("focus", () => {
// 	textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
// 	textInput.value = "";
// });

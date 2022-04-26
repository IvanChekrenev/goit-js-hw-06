const nameSpanEl = document.querySelector("#name-output");
console.log(nameSpanEl);
const inputEl = document.querySelector("#name-input");
console.log(inputEl);





inputEl.addEventListener('input', onInputChange);



function onInputChange(event) { 
    console.log(event.currentTarget.value);
    if (event.currentTarget.value !== "") {
        nameSpanEl.textContent = event.currentTarget.value;
    } else { nameSpanEl.textContent = "Anonymous"; }
}










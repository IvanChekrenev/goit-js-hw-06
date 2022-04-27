const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
console.log(inputEl);
console.log(spanEl);


inputEl.addEventListener('input', changeSpanText);
spanEl.style.fontSize = `${inputEl.value}.px`
function changeSpanText(event) {
    console.log(event.currentTarget.value);
    spanEl.style.fontSize = `${event.currentTarget.value}.px`
 } 
const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value')

console.log(decrementButtonEl);
console.log(incrementButtonEl);
console.log(counterValueEl);

let counterValue = 0;


// const handledecrementButtonClick = () => {
//     console.log('decrement click');
//     counterValue -= 1;
//     counterValueEl.textContent = counterValue;
// }

function handledecrementButtonClick() {
    console.log('decrement click');
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}


decrementButtonEl.addEventListener('click', handledecrementButtonClick);

// const handleincrementButtonClick = () => {
//     console.log('increment click');
//     counterValue += 1;
//     counterValueEl.textContent = counterValue;
// }

function handleincrementButtonClick() {
    console.log('increment click');
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}


incrementButtonEl.addEventListener('click', handleincrementButtonClick);





 






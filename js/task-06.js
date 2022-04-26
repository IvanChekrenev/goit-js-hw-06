const inputEl = document.querySelector('#validation-input');
console.log(inputEl);


function onInputChange(event) {
    console.log(event.currentTarget.value.length);
    console.log(inputEl.dataset.length);
    
    
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        console.log('ok');
        event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
    } else {
        console.log('no ok');
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
        
        
        
    };  
 }



inputEl.addEventListener("blur", onInputChange);
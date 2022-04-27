
const formEl = document.querySelector("form.login-form");

formEl.addEventListener('submit',checkSubmitInput);

function checkSubmitInput(event) { 
    event.preventDefault();
    // console.dir(event.currentTarget.elements)
    // console.dir(event.currentTarget.elements.email.value);
    // console.dir(event.currentTarget.elements.password.value);
    if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") { 
        alert('Заполни поля!!!')
    };

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = { mail, password };
    console.log(formData);
    event.currentTarget.reset();



    // const formDataNew = new FormData(event.currentTarget);
    // console.log(formDataNew);
       

}



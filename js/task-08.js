
const formEl = document.querySelector("form.login-form");

formEl.addEventListener('submit',checkSubmitInput);

function checkSubmitInput(event) { 
    event.preventDefault();
    // console.dir(event.currentTarget.elements)
    // console.dir(event.currentTarget.elements.email.value);
    // console.dir(event.currentTarget.elements.password.value);
    console.log(event.currentTarget.elements);
    if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") { 
        return alert('Заполни поля!!!')
        
    };

    const {
        elements: { email, password },
    } = event.currentTarget;    
    
    const formData = {
        email: email.value,
        password: password.value,
    };


    // const email = event.currentTarget.elements.email.value;
    // const password = event.currentTarget.elements.password.value;
    // const formData = { email, password };
    console.log(formData);
    event.currentTarget.reset();



    // const formDataNew = new FormData(event.currentTarget);
    // console.log(formDataNew);
       

}



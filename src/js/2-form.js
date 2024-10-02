const localStorageData = JSON.parse(localStorage.getItem('feedback-form-state'))

const formData = {
    email: "",
    message: ""
}

if (localStorageData != null) {
    formData.email = localStorageData.email;
    formData.message = localStorageData.message; 
}

const form = document.querySelector('form')

const emailInput = form.querySelector('input[name="email"]');
emailInput.value = formData.email;

const messageInput = form.querySelector('textarea[name="message"]');
messageInput.value = formData.message;

form.addEventListener('input', (event) => {
    if (event.target.name === 'email') {
        formData.email = event.target.value;
    } else {
        formData.message = event.target.value;
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields')
    } else {
        console.log(formData);
        localStorage.clear();
        formData.email = ''
        formData.message = ''
        form.reset();
    }
})



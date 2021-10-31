import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

initForm();

form.addEventListener('input', throttle(onFormInput, 500));

form.addEventListener('submit', onFormSubmit);

function onFormInput (evt) {
    formData[evt.target.name] = evt.target.value;    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit (evt) {   
evt.preventDefault();
if (localStorage.getItem(STORAGE_KEY)) {
console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}
evt.target.reset();
localStorage.removeItem(STORAGE_KEY);
}

function initForm() {
    let savedObject = JSON.parse(localStorage.getItem(STORAGE_KEY));


    if (savedObject && savedObject.email) {
        email.value = savedObject.email;        
            } 
    
    if (savedObject && savedObject.message) {
    textarea.value = savedObject.message;
    }        
    
};






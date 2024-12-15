
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();
 if (formEl.elements.email.value === '' || formEl.elements.password.value === "") {
     alert('All form fields must be filled in');
     return;
    } 
  const formData = {
    [formEl.elements.email.name]: formEl.elements.email.value.trim(),
    [formEl.elements.password.name]: formEl.elements.password.value.trim(),   
  };
   
console.log(formData);
  formEl.reset();
});
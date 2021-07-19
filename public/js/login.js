//Login Functions

const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/user-routes/login', {
        method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      })
      console.log(response);
  
      if (response.status == 200) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const age = document.querySelector('#age-signup').value.trim();
    const gender = document.querySelector('#gender-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && age && gender && password) {
      const response = await fetch.post('/api/user-routes/', {method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },})
      if (response.status == 200) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };


  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

    document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
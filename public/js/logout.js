const logout = async () => {
    // Make a POST request to destroy the session on the back end
    const response = await axios.post('/api/user-routes/logout', {
    });
  
    if (response.status == 204) {
      // If successfully logged out, redirect to the login page
      document.location.replace('/');
      alert("Your session has been closed");
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
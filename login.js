document.getElementById("loginButton").addEventListener("click", function(event) {
    event.preventDefault();  // Prevents the form from submitting normally
  
    // Get the values of the username and password fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Simple validation before sending to backend
    if (username === "" || password === "") {
      alert("Invalid Inputs");
      return;
    }
  
    // Send data to the server for authentication (assuming you have a login API)
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Redirect to a protected page or dashboard
        window.location.href = '/dashboard';
      } else {
        alert("Invalid credentials. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again later.");
    });
  });
  
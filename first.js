function validateForm() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var usernameRegex = /^[a-zA-Z]+$/;
   
    if (!firstName || !lastName || !email || !password) {
      alert("Please enter a valid name and email");
      highlightEmptyFields();
    } else {
      console.log("User's Data:");
      console.log("First Name: " + firstName);
      console.log("Last Name: " + lastName);
      console.log("Email: " + email);
      console.log("Password: " + password);
    }
    function highlightEmptyFields() {
        var inputFields = document.getElementsByTagName("input");
  
        for (var i = 0; i < inputFields.length; i++) {
          if (!inputFields[i].value) {
            inputFields[i].classList.add("error");
          }
          
        }
        
      }
      if (!email.match(emailRegex)) {
        document.getElementById('email').console.log("Invalid Email");
        return false;
      } else {
        document.getElementById('email').innerHTML = '';
      }
      if (!firstName.match(usernameRegex)&&!lastName.match(usernameRegex)) {
        document.getElementById('fname').innerHTML = 'Invalid name (use only letters)';
        document.getElementById('lname').innerHTML = 'Invalid name (use only letters)';
        return false;
      } else {
        document.getElementById('fname').innerHTML = '';
        document.getElementById('lname').innerHTML = '';
      }
  }
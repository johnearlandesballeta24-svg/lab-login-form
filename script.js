function handleLogin() {
 
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

 
  var usernameError = document.getElementById("username-error");
  var passwordError = document.getElementById("password-error");
  var successMsg = document.getElementById("success-msg");

  
  usernameError.textContent = "";
  passwordError.textContent = "";
  successMsg.style.display = "none";

 
  var hasError = false;

 
  if (username === "") {
    usernameError.textContent = "Username is required.";
    hasError = true;
  }

  
  if (password === "") {
    passwordError.textContent = "Password is required.";
    hasError = true;
  } else if (password.length < 6) {
    
    passwordError.textContent = "Password must be at least 6 characters.";
    hasError = true;
  }

  
  if (hasError === false) {
    successMsg.style.display = "block";
  }
}
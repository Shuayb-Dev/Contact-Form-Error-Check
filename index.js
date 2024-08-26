function firstName() {
  // Get the input field and error message elements
  let fnameInput = document.forms["myForm"]["fname"];
  let errorMessage = document.getElementById("fname-error");

  // Check if the field is empty
  if (fnameInput.value.trim() === "") {
    // Add the error class to the input field
    fnameInput.classList.add("error");

    // Display the error message
    errorMessage.style.display = "block";
    errorMessage.textContent = "This field is required.";

    // Prevent form submission
    return false;
  } else {
    // Remove error styling if input is valid
    fnameInput.classList.remove("error");
    errorMessage.style.display = "none";

    // Allow form submission if no error
    return true;
  }
}

function secondName() {
  // Get the input field and error message elements
  let lnameInput = document.getElementById("lname");
  let lnameErrorMessage = document.getElementById("lname-error");

  // Check if the field is empty
  if (lnameInput.value.trim() === "") {
    // Add the error class to the input field
    lnameInput.classList.add("error");

    // Display the error message
    lnameErrorMessage.style.display = "block";
    lnameErrorMessage.textContent = "This field is required.";
    return false;
  } else {
    // Remove error styling if input is valid
    lnameInput.classList.remove("error");
    lnameErrorMessage.style.display = "none";
    return true;
  }
}

function emailCheck() {
  // Get the input field and error message elements
  let emailInput = document.getElementById("email");
  let emailErrorMessage = document.getElementById("email-error");

  //Check if the field is empty
  if (emailInput.value.trim() === "") {
    // Add the error class to the input field
    emailInput.classList.add("error");

    // Display the error message
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "This field is required.";

    // Prevent form submission
    return false;
  } else {
    // Remove error styling if input is valid
    emailInput.classList.remove("error");
    emailErrorMessage.style.display = "none";

    // Allow form submission if no error
    return true;
  }
}

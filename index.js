function firstName() {
  // Get the input field and error message elements
  let fnameInput = document.forms["myForm"]["fname"];
  let errorMessage = document.getElementById("fname-error");

  // Check if the field is empty
  if (fnameInput.value.trim() === "") {
    // Add the error class to the input field
    fnameInput.classList.add("error");
    fnameInput.classList.remove("valid");

    // Display the error message
    errorMessage.style.display = "block";
    errorMessage.textContent = "This field is required.";

    // Prevent form submission
    return false;
  } else {
    // Remove error styling if input is valid and add valid styling
    fnameInput.classList.remove("error");
    errorMessage.style.display = "none";

    // Allow form submission if no error
    return true;
  }
}

function applyValidClass() {
  // Get the input field element
  let fnameInput = document.getElementById("fname");
  let lnameInput = document.getElementById("lname");
  let emailInput = document.getElementById("email");
  let generalEnquiryDiv = document.querySelector(".general-enquiry");
  let sEnquiryDiv = document.querySelector(".support-enquiry");
  let messageInput = document.getElementById("message");

  // Add the 'valid' class to the input field
  fnameInput.classList.add("valid");
  lnameInput.classList.add("valid");
  emailInput.classList.add("valid");
  generalEnquiryDiv.classList.add("valid");
  sEnquiryDiv.classList.add("valid");
  messageInput.classList.add("valid");
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

function gEnquiryCheck() {
  // Get the radio button and error message elements
  let radio1 = document.getElementById("general-enquiry");
  let radioErrorMessage = document.getElementById("gEnquiry-error");
  let generalEnquiryDiv = document.querySelector(".general-enquiry");

  if (radio1.checked) {
    // Hide error message and remove error styling if checked
    radioErrorMessage.style.display = "none";
    generalEnquiryDiv.classList.remove("error");
    return true; // Allow form submission if checked
  } else {
    // Display the error message and add error styling to the general enquiry radio button
    radioErrorMessage.style.display = "block";
    radioErrorMessage.textContent = "Please select a query type.";
    generalEnquiryDiv.classList.add("error");
    return false; // Prevent form submission
  }
}

function sEnquiryCheck() {
  // Get the radio button and error message elements
  let radio2 = document.getElementById("support-enquiry");
  let radioErrorMessage = document.getElementById("sEnquiry-error");
  let supportEnquiryDiv = document.querySelector(".support-enquiry");

  if (radio2.checked) {
    // Hide error message and remove error styling if checked
    radioErrorMessage.style.display = "none";
    supportEnquiryDiv.classList.remove("error");
    // Allow form submission if checked
    return true;
  } else {
    // Display the error message and add error styling to the support enquiry radio button
    radioErrorMessage.style.display = "block";
    radioErrorMessage.textContent = "Please select a query type.";
    supportEnquiryDiv.classList.add("error");
    // Prevent form submission
    return false;
  }
}

function myCheckbox() {
  // Get the checkbox and error message elements
  let checkBox = document.getElementById("consent");
  let checkBoxErrorMessage = document.getElementById("checkbox-error");
  let consentDiv = document.querySelector(".consent");

  if (checkBox.checked) {
    // Hide error message and remove error styling if checked
    checkBoxErrorMessage.style.display = "none";
    consentDiv.classList.remove("error");
    // Allow form submission if checked
    return true;
  } else {
    // Display the error message and add error styling to the checkbox
    checkBoxErrorMessage.style.display = "block";
    checkBoxErrorMessage.textContent =
      "To Submit this form, please consent to being contacted";
    consentDiv.classList.add("error");
    // Prevent form submission
    return false;
  }
}

function messageCheck() {
  // Get the input field and error message elements
  let messageInput = document.getElementById("message");
  let messageError = document.getElementById("message-error");

  // Check if the field is empty
  if (messageInput.value.trim() === "") {
    // Add the error class to the input field
    messageInput.classList.add("error");

    // Display the error message
    messageError.style.display = "Block";
    messageError.textContent = "This field is required.";
    // Prevent form submission
    return false;
  } else {
    // Remove error styling if input is valid
    messageError.display.style = "none";
    messageInput.classList.remove("error");
    // Allow form submission if no error
    return true;
  }
}

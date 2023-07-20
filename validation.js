// validation.js

// Get a reference to the form element
var form = document.getElementById('contact-form');

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Perform your validation logic here
  if (validateForm()) {
    // If the form is valid, you can submit it
    form.submit();
  }
});

// Validate the form fields
function validateForm() {
  // Get the values of the form fields
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Perform your validation checks
  if (name.trim() === '') {
    alert('Please enter your name.');
    return false;
  }

  if (email.trim() === '') {
    alert('Please enter your email.');
    return false;
  }

  if (message.trim() === '') {
    alert('Please enter a message.');
    return false;
  }

  // If all validations pass, return true
  return true;
}

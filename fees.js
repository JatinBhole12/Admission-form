// Get the form element
const form = document.getElementById('fees-form');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the form data
  const feesType = document.getElementById('fees-type').value;
  const feesAmount = document.getElementById('fees-amount').value;
  const paymentMode = document.getElementById('payment-mode').value;

  // Validate the form data
  if (feesType === '' || feesAmount === '' || paymentMode === '') {
    alert('Please fill in all the fields');
    return;
  }

  // Process the payment
  processPayment(feesType, feesAmount, paymentMode);
});

// Process the payment function
function processPayment(feesType, feesAmount, paymentMode) {
  // Simulate a payment processing API call
  setTimeout(() => {
    alert(`Payment of ${feesAmount} for ${feesType} using ${paymentMode} has been successful!`);
  }, 2000);
}
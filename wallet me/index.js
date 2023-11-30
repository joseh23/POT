document.getElementById('referralForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    // Here you can add logic to send the referral email or perform other actions
    // For demonstration purposes, let's display a message
    const messageElement = document.getElementById('message');
    messageElement.textContent = `Referral sent to ${email} successfully!`;
    messageElement.style.color = 'green';
  });
  // login js

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform login validation (dummy validation)
    const userEmail = document.getElementById('loginEmail').value;
    const userPassword = document.getElementById('loginPassword').value;
  
    // Dummy validation (replace with your authentication logic)
    if (userEmail === 'user@example.com' && userPassword === 'password') {
      // Redirect to the landing page upon successful login
      window.location.href = 'index.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });

  // sign up js
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform signup logic (dummy validation)
    const newUserEmail = document.getElementById('signupEmail').value;
    const newUserPassword = document.getElementById('signupPassword').value;
  
    // Dummy signup logic (replace with your actual signup process)
    // For demonstration purposes, redirect to the landing page upon successful signup
    if (newUserEmail && newUserPassword) {
      // Redirect to the landing page upon successful signup
      window.location.href = 'index.html';
    } else {
      alert('Please fill in all fields.');
    }
  });



  // contribution amount section

  function processPayment() {
    const amount = document.getElementById('contributionAmount').value;

    // Create a form to submit to PayPal
    const form = document.createElement('form');
    form.method = 'post';
    form.action = 'https://www.sandbox.paypal.com/cgi-bin/webscr'; // PayPal sandbox URL

    // Add required hidden fields for PayPal integration
    const cmdInput = document.createElement('input');
    cmdInput.type = 'hidden';
    cmdInput.name = 'cmd';
    cmdInput.value = '_donations';

    const businessInput = document.createElement('input');
    businessInput.type = 'hidden';
    businessInput.name = 'business';
    businessInput.value = 'jnjugunam8@gmail.com'; // Replace with your PayPal email

    const currencyInput = document.createElement('input');
    currencyInput.type = 'hidden';
    currencyInput.name = 'currency_code';
    currencyInput.value = 'USD'; // Change currency as needed

    const amountInput = document.createElement('input');
    amountInput.type = 'hidden';
    amountInput.name = 'amount';
    amountInput.value = amount;

    // Append the inputs to the form
    form.appendChild(cmdInput);
    form.appendChild(businessInput);
    form.appendChild(currencyInput);
    form.appendChild(amountInput);

    // Append the form to the body and submit it
    document.body.appendChild(form);
    form.submit();
  }
  function processPayment() {
    const amount = document.getElementById('contributionAmount').value;

    // Assuming payment process is successful here...

    // Generate referral link based on user's ID or any unique identifier
    const userID = generateUserID(); // Function to generate a unique user ID
    const referralLink = `http://127.0.0.1:5500/signup.html`;

    // Display referral link to the user
    document.getElementById('referralLink').textContent = referralLink;
    document.getElementById('referralLinkSection').style.display = 'block';
  }

  function generateUserID() {
    // This is a sample function, replace with your actual logic to generate a unique user ID
    // For example, you might use a combination of timestamp and random characters
    return 'userID123'; // Replace this with your generated user ID
  }




  // Assuming you've included qrcode.min.js in your project

// Generate QR code with the referral link or any other information you need
const qr = new QRCode(document.getElementById("qrcode"), {
    text: "http://127.0.0.1:5500/index.html", // Replace with your referral link or data
    width: 200,
    height: 200,
  });
  
  // Additional settings can be customized as needed, like error correction level, color, etc.
  
const form = document.getElementById('contactForm');
const submitBtn = document.querySelector('.submit');
const messageSpan = document.getElementById('msg');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  submitBtn.disabled = true; // Disable button to prevent multiple submissions
  messageSpan.textContent = 'Sending...'; // Display a loading message

  try {
    const response = await fetch('mail.php', { // Replace '/send-email' with your server-side script endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        NAME: form.NAME.value,
        EMAIL: form.EMAIL.value,
        SUBJECT: form.SUBJECT.value,
        MESSAGE: form.MESSAGE.value
      })
    });

    if (response.ok) {
      messageSpan.textContent = 'Email sent successfully!';
      form.reset(); // Clear the form after successful submission
    } else {
      messageSpan.textContent = 'Error sending email. Please try again.';
    }
  } catch (error) {
    console.error('Error sending email:', error);
    messageSpan.textContent = 'An error occurred. Please try again.';
  } finally {
    submitBtn.disabled = false; // Re-enable button after submission
  }
});
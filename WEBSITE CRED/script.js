// Contact form submission to n8n webhook
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      Name: form.name.value,
      "Phone #": form.phone.value,
      "Email Address": form.email.value,
      Interest: form.interest.value,
      Message: form.message.value,
      submittedAt: new Date().toISOString(),
      formMode: "live"
    };

    try {
      const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        form.reset();
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting form.');
    }
  });
}

// You can add interactive UI scripts here for animations, hover effects, etc.

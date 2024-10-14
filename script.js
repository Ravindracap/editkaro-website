document.addEventListener('DOMContentLoaded', () => {
    // Email subscription form submission
    document.getElementById('email-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        // Send email to Google Sheets
        fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
            method: 'POST',
            body: JSON.stringify({ email: email }),
        }).then(response => {
            if (response.ok) {
                alert('Subscribed successfully!');
            } else {
                alert('Subscription failed. Please try again.');
            }
        });
    });

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        // Send contact info to Google Sheets
        fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
            method: 'POST',
            body: JSON.stringify({ name: name, email: email, phone: phone, message: message }),
        }).then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Message sending failed. Please try again.');
            }
        });
    });
});

function filterVideos(category) {
    const videos = document.querySelectorAll('.video-container div');
    videos.forEach(video => {
        if (video.classList.contains(category)) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbx8YZKmefQsjrF-LZEDA6Afeb7VNdOtt7boZXGcdW_UTcoF6Gu4LMmBBO9EyGIajG9y9g/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })


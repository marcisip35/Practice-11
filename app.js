document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Preventing default submission

    console.log("Form Validity: ", this.checkValidity());

    if (!this.checkValidity()) {
        alert('Please fill out all required fields.');
        return;
    }

    let parms = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        question: document.getElementById("question").value,
        info: document.getElementById("info").value,
    };

    emailjs.send("service_gfcxt5j", "template_fihjygy", parms)
        .then(function(response) {
            alert("Form Sent!!");
        }, function(error) {
            alert("Failed to send form: " + error);
        });
});

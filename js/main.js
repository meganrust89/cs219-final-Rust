const form = document.getElementById('contactForm');
if(form) {
    form.addEventListener('submit', function(e) { 
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if(name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }
        if(!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }
        alert("Message sent successfully!");
    });
}
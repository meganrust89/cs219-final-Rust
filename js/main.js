const filterButtons = 
document.querySelectorAll('.filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
       filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');

        const category = button.dataset.category;
        blogCards.forEach(card => {
            if(category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const searchInput = document.getElementById('searchInput');
if(searchInput) {
    searchInput.addEventListener('input', () => {
        const value = searchInput.value.toLowerCase();
        blogCards.forEach(card => {
           const text = card.textContent.toLowerCase();
            if(text.includes(value)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

const form = document.getElementById('contactForm');
if(form) {
    form.addEventListener('submit', (e) => { 
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
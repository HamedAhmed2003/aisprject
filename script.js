// Simple search filter for car cards
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search for a car...';
searchInput.style.cssText = 'width: 100%; padding: 10px; margin-bottom: 20px; font-size: 16px; border: 1px solid #ccc; border-radius: 4px;';

document.querySelector('main').prepend(searchInput);

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.car-card');
    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || desc.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Add click alert to each car card
document.querySelectorAll('.car-card').forEach(card => {
    card.addEventListener('click', function() {
        const carName = this.querySelector('h2').textContent;
        alert(`You clicked on ${carName}!`);
    });
});

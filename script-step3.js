const fortunes = [
    'Career',
    'Authority and Wealth',
    'Financial Stability',
    'Love',
    'Luck',
    'Health',
    'Charm and Compassion'
];

let currentIndex = 0;

function updateFortune() {
    document.getElementById('fortune').innerText = fortunes[currentIndex];
}

document.getElementById('left-arrow').addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? fortunes.length - 1 : currentIndex - 1;
    updateFortune();
});

document.getElementById('right-arrow').addEventListener('click', function() {
    currentIndex = (currentIndex === fortunes.length - 1) ? 0 : currentIndex + 1;
    updateFortune();
});

document.getElementById('fortune-card').addEventListener('click', function() {
    localStorage.setItem('selectedFortune', fortunes[currentIndex]);
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'step4.html';
    }, 1000);
});

// Initial update to set the first fortune
updateFortune();

document.addEventListener('DOMContentLoaded', (event) => {
    const fortunes = {
        'Career': {
            image: 'assets/BlueSunburst.png'
        },
        'Authority and Wealth': {
            image: 'assets/BlueSunburst.png'
        },
        'Financial Stability': {
            image: 'assets/BlueSunburst.png'
        },
        'Love': {
            image: 'assets/BlueSunburst.png'
        },
        'Luck': {
            image: 'assets/BlueSunburst.png'
        },
        'Health': {
            image: 'assets/BlueSunburst.png'
        },
        'Charm and Compassion': {
            image: 'assets/BlueSunburst.png'
        }
    };

    const selectedFortune = localStorage.getItem('selectedFortune');

    if (selectedFortune && fortunes[selectedFortune]) {
        const fortune = fortunes[selectedFortune];
        document.getElementById('watch-image').src = fortune.image;
    } else {
        document.getElementById('watch-image').src = 'path/to/default-watch.png';
    }

    document.body.addEventListener('click', () => {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = 'step7.html';
        }, 1000);
    });
});

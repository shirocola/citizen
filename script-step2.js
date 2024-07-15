let selectedNumber = null;

function selectNumber(num) {
    selectedNumber = num;
    localStorage.setItem('favoriteNumber', selectedNumber);
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'step3.html';
    }, 1000);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const favoriteNumber = localStorage.getItem('favoriteNumber');
    if (favoriteNumber !== null) {
        selectedNumber = parseInt(favoriteNumber);
    }
});

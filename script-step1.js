const days = [
    { short: 'SUN', long: 'day', color: 'linear-gradient(to bottom right, #FFD1D1, #FFB3B3)', borderColor: '#FF4500' },
    { short: 'MON', long: 'day', color: 'linear-gradient(to bottom right, #FFFFCC, #FFFF99)', borderColor: '#FFD700' },
    { short: 'TUE', long: 'day', color: 'linear-gradient(to bottom right, #FFCCE6, #FF99CC)', borderColor: '#FF1493' },
    { short: 'WED', long: 'day', color: 'linear-gradient(to bottom right, #CCFFCC, #99FF99)', borderColor: '#228B22' },
    { short: 'THU', long: 'day', color: 'linear-gradient(to bottom right, #FFD699, #FFB366)', borderColor: '#FF8C00' },
    { short: 'FRI', long: 'day', color: 'linear-gradient(to bottom right, #CCF2FF, #99E6FF)', borderColor: '#00BFFF' },
    { short: 'SAT', long: 'day', color: 'linear-gradient(to bottom right, #E0CCFF, #D1B3FF)', borderColor: '#8A2BE2' }
];

let currentIndex = 1;

function updateDay() {
    const day = days[currentIndex];
    document.getElementById('birthday').innerText = day.short;
    document.getElementById('day-text').innerText = day.long;
    document.getElementById('birthday-card').style.background = day.color;
    document.getElementById('birthday').style.color = 'white';
    document.getElementById('day-text').style.color = 'white';
    document.getElementById('birthday').style.textShadow = `-1px -1px 0 ${day.borderColor}, 1px -1px 0 ${day.borderColor}, -1px 1px 0 ${day.borderColor}, 1px 1px 0 ${day.borderColor}`;
    document.getElementById('day-text').style.textShadow = `-1px -1px 0 ${day.borderColor}, 1px -1px 0 ${day.borderColor}, -1px 1px 0 ${day.borderColor}, 1px 1px 0 ${day.borderColor}`;
}

function selectBirthday() {
    localStorage.setItem('selectedBirthday', days[currentIndex].long);
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'step2.html';
    }, 1000);
}

document.getElementById('left-arrow').addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? days.length - 1 : currentIndex - 1;
    updateDay();
});

document.getElementById('right-arrow').addEventListener('click', function() {
    currentIndex = (currentIndex === days.length - 1) ? 0 : currentIndex + 1;
    updateDay();
});

// Initial update to set the first day
updateDay();

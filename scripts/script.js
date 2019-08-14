let date = new Date();
let currentHour = date.getHours();
let customTitle = document.getElementById('custom-title');

const load = () => {
    if (currentHour >= 0 && currentHour <= 5){
        customTitle.innerHTML = 'What time is this..';
    } else if(currentHour >= 6 && currentHour <= 11){
        customTitle.innerHTML = 'Morning!';
    } else if (currentHour >= 12 && currentHour <= 17){
        customTitle.innerHTML = 'Afternoon!';
    } else if (currentHour >= 18 && currentHour <= 23){
        customTitle.innerHTML = 'Evening!';
    }
} 
window.onload = load; 
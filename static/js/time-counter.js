document.addEventListener('DOMContentLoaded', () =>{
    const weddingDay = new Date(2024, 7, 16, 0, 0, 0);
    const daysVal = document.querySelector('.block__timer#days .data');
    const hoursVal = document.querySelector('.block__timer#hours .data');
    const minutesVal = document.querySelector('.block__timer#minutes .data');
    const secondsVal = document.querySelector('.block__timer#seconds .data');

    const daysText = document.querySelector('.block__timer#days .description');
    const hoursText = document.querySelector('.block__timer#hours .description');
    const minutesText = document.querySelector('.block__timer#minutes .description');
    const secondsText = document.querySelector('.block__timer#seconds .description');


    function declOfNum(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
    
    const timeCount = () =>{
        let nowDate = new Date();
        let leftUntil = weddingDay - nowDate;

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;

        daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
        hoursText.textContent = declOfNum(hours, ['час', 'часв', 'часов']);
        minutesText.textContent = declOfNum(minutes, ['минкута', 'минуты', 'минут']);
        secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
    }

    timeCount()
    setInterval(timeCount, 1000);
})
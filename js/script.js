let daysContainer = document.querySelector('.countdown-custom-days');
let hrsContainer = document.querySelector('.countdown-custom-hrs');
let minContainer = document.querySelector('.countdown-custom-min');
// let messageContainer = document.querySelector('.countdown-custom-message-top');

let end = new Date("17 aprile 2022 12:00:00").getTime();

let x = setInterval( function(){
    
    let now = new Date().getTime();
    let difference = end - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hrs = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    
    if(days < 10) {
        days = days.toString();
        days = "0" + days;
    }

    if(hrs < 10) {
        hrs = hrs.toString();
        hrs = "0" + hrs;
    }

    if(min < 10) {
        min = min.toString();
        min = "0" + min;
    }


    daysContainer.innerHTML = days;
    hrsContainer.innerHTML = hrs;
    minContainer.innerHTML = min;

    if (difference < 0) {
        clearInterval(x);
        daysContainer.innerHTML = "00";
        hrsContainer.innerHTML = "00";
        minContainer.innerHTML = "00";
        messageContainer.innerHTML = "The offer is finished to buy";
    }

}, 1000);
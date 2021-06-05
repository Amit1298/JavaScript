function updateClock(){
    //get the current date:
    let currentTime= new Date();

    //Extract hour, minute, and seconds from the date:
    let currentHour= currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    //Pad 0 if minutes, seconds and hour is less then 10 (single digit):
    currentMinutes=(currentMinutes<10? "0": "")+ currentMinutes;

    currentSeconds=(currentSeconds<10? "0": "")+ currentSeconds;

    currentHour=(currentHour<10? "0": "")+ currentHour;


    //choose AM/PM as per the time of the day
    let timeOfDay= (currentHour <12)? "AM":"PM";

    //convert railway clock to AM/PM clock
    currentHour= (currentHour>12)?currentHour-12 : currentHour;

    currentHour= (currentHour==0)? 12 : currentHour;

    //preparing the time string from hours , minutes, seconds
    let currentTimeStr = currentHour + ":"+currentMinutes + ":" + currentSeconds + " "+ timeOfDay;

    //Insert the time string inside the DOM
    document.getElementById("clock").innerHTML = currentTimeStr;
}
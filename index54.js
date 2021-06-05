const alarmSubmit =document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);

// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

var audio = new Audio.Sound('./audio/acoustic.wav', function() {
    // Sound loaded!
    acousticGuitar.play();
});

function ringBell(){
    Audio.play();
}

function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate =new Date(alarm.value);
    console.log(`Setting Alarmfor ${alarmDate}...`);
    now = new Date();
    let timeToAlarm= alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm >=0){
        setTimeout(()=>{
            ringBell();
        }, timeToAlarm);
    }
}
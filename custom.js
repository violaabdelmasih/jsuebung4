'use strict';
// Übung 09
const display = document.getElementById('displayTime');

var stopTimer = 0;
var pause = true;
var lastRound = new Date();

function start() {
    pause = false;
}

function pauseTimer() {
    pause = true;
}

function reset() {
    pause = true;
    stopTimer = 0;
    displayNew();
}

function timeNew() {
    if(pause === false) {
       stopTimer += new Date() -lastRound; 
       displayNew();
    }

    lastRound = new Date();
    setTimeout(timeNew, 1);
}

function displayNew() {
    let  milliseconds = stopTimer % 1000;
    let seconds = Math.floor(stopTimer/ 1000) % 60;
    let minutes = Math.floor(stopTimer / 60000) % 60;
    let hours = Math.floor(stopTimer / 3600000);

    hours = hours < 10 ? "0" + hours : hours;
    minutes  = minutes  < 10 ? "0" + minutes  : minutes ;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds = "000" +  milliseconds;
    milliseconds =  milliseconds.slice( milliseconds.length - 3);

    display.innerHTML = hours + ":" + minutes  + ":" + seconds + "." +  milliseconds;
}

timeNew();
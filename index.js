// done: problem! - reset on start button
// done: stop counting on pause
// done: enable/disable buttons
// done: reset on reset button
// todo: problem! = alignment of counting text - digits!
// todo: pop up "are you sure?" for reset button 
// todo: enable/disable split & reset buttons
// todo: log for pause button - pause = split + pause
// todo: log for split button 
// todo: cursor change on disabled buttons
let passedTime;
let passedTimeMiliSecond; 
let passedTimeSecond; 
let passedTimeMinute;
let passedTimeHour;
let startTime; 

const startButtonElement = document.getElementById("startButton");
const pauseButtonElement = document.getElementById("pauseButton");
const splitButtonElement = document.getElementById("splitButton");
const resetButtonElement = document.getElementById("resetButton");
const stopWatchDisplayElement = document.querySelector(".stopWatchDisplay");

splitButtonElement.disabled = true;
resetButtonElement.disabled = true;

let timerInterval = 0;
let pauseFlag = false;
let resetFlag = false;
let passedTimeTemp;

startButtonElement.addEventListener('click', () => { 
    startTime = Date.now(); 

    startButtonElement.classList.add("hidden");
    pauseButtonElement.classList.remove("hidden");

    if(startButtonElement.classList.contains("hidden")){
        splitButtonElement.disabled = false;
        resetButtonElement.disabled = true;
    }

    timerInterval = setInterval( () => {
        if(pauseFlag){
            passedTime = Date.now() - startTime + passedTimeTemp;
        } 
        if((resetFlag === false) && (pauseFlag === false)){
            passedTime = Date.now() - startTime;
        }

        passedTimeMiliSecond = passedTime%999;
        passedTimeSecond = Math.floor((passedTime/999)%1000)%60;
        passedTimeMinute = Math.floor((((passedTime/59)/1000)%1000)%60);
        passedTimeHour = Math.floor(((((passedTime/59)/60)/1000)%1000)%60);

        stopWatchDisplayElement.textContent = `${passedTimeHour}:${passedTimeMinute}:${passedTimeSecond}.${passedTimeMiliSecond}`;        
    },1);
});

resetButtonElement.addEventListener('click', () => {
    clearInterval(timerInterval);
    resetFlag = true;
    passedTimeTemp = 0;
    stopWatchDisplayElement.textContent = `00:00:00.000`;        
});

pauseButtonElement.addEventListener('click', () => {
    startButtonElement.classList.remove("hidden");
    pauseButtonElement.classList.add("hidden");
    clearInterval(timerInterval);    
    pauseFlag = true;
    passedTimeTemp = passedTime;

    if(pauseButtonElement.classList.contains("hidden")){
        splitButtonElement.disabled = true;
        resetButtonElement.disabled = false; 
    }
});
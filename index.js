let passedTime;
let passedTimeMillisecond; 
let passedTimeSecond; 
let passedTimeMinute;
let passedTimeHour;
let startTime; 

const startButtonElement = document.getElementById("startButton");
const pauseButtonElement = document.getElementById("pauseButton");
const splitButtonElement = document.getElementById("splitButton");
const resetButtonElement = document.getElementById("resetButton");
const stopWatchDisplayElement = document.querySelector(".stopWatchDisplay");
const logsElement = document.querySelector(".logs");

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

        stopWatchText(passedTime);
    },1);
});

splitButtonElement.addEventListener('click', () => {
    PrintLog("Splitted at ");
});

resetButtonElement.addEventListener('click', () => {
    clearInterval(timerInterval);
    resetFlag = true;
    passedTimeTemp = 0;
    stopWatchDisplayElement.textContent = `00:00:00.000`;      
    logsElement.innerHTML = "";
    resetButtonElement.disabled = true;
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
    PrintLog("Paused at ");
});

const stopWatchText = (passedTime) => {
    passedTimeMillisecond = passedTime%1000;
    passedTimeSecond = Math.floor((passedTime/1000)%1000)%60;
    passedTimeMinute = Math.floor((((passedTime/60)/1000)%1000)%60);
    passedTimeHour = Math.floor(((((passedTime/60)/60)/1000)%1000)%60);

    if(passedTimeMillisecond < 10){
        passedTimeMillisecond = "00"+passedTimeMillisecond;
    } else if(passedTimeMillisecond < 100){
        passedTimeMillisecond = "0"+passedTimeMillisecond;
    } 

    if(passedTimeSecond < 10){
        passedTimeSecond = "0"+passedTimeSecond;
    } 
    if(passedTimeMinute < 10){
        passedTimeMinute = "0"+passedTimeMinute;
    } 
    if(passedTimeHour < 10){
        passedTimeHour = "0"+passedTimeHour;
    } 

    stopWatchDisplayElement.textContent = passedTimeHour+":"+passedTimeMinute+":"+passedTimeSecond+"."+passedTimeMillisecond;
    
    return (passedTimeHour+":"+passedTimeMinute+":"+passedTimeSecond+"."+passedTimeMillisecond);
}

const PrintLog = (text) => {
    const line = logsElement.insertRow(0);
    const cell = line.insertCell(0);

    cell.innerHTML = text + stopWatchText(passedTime);
}
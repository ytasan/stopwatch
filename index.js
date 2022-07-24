// todo = yazdirilan zaman degerinin soldan saga kaymasi - sebebi: milisaniye degerinin basamak sayisinin degismesi 

let startButtonText = document.querySelector("#startButton");
let splitButton = document.querySelector("#splitButton");
let resetButton = document.querySelector("#resetButton");
splitButton.disabled = true;
resetButton.disabled = true;

let startButtonClickCounter = 0;

document.querySelector('#startButton').addEventListener('click', function() { 

    startButtonClickCounter++;

    if (startButtonText.innerHTML === "Start") {
        startButtonText.innerHTML = "Pause";
        splitButton.disabled = false;
    } else {
        startButtonText.innerHTML = "Start";
        splitButton.disabled = true;
    }

    if ((startButtonClickCounter >= 1) && (startButtonText.innerHTML === "Start")) {
        resetButton.disabled = false;
    } else {
        resetButton.disabled = true;
    }

    let startTime = Date.now(); 

    setInterval( () => {
        let passedTime = Date.now() - startTime;
        let passedTimeMiliSecond = passedTime%1000;
        let passedTimeSecond = (Math.floor((passedTime/1000)%1000)%60);
        let passedTimeMinute = Math.floor((((passedTime/60)/1000)%1000)%60);
        let passedTimeHour = Math.floor(((((passedTime/60)/60)/1000)%1000)%60);

        document.querySelector('.stopWatchDisplay').textContent = `${passedTimeHour}:${passedTimeMinute}:${passedTimeSecond}.${passedTimeMiliSecond}`;        
    },1);

    // todo: stop counting
});
 
// todo: pop up "are you sure?" for reset button 
// document.querySelector('#splitbutton').addEventListener('click', function() {
//     console.log("split button pressed");
// });
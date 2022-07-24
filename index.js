// todo = yazdirilan zaman degerinin soldan saga kaymasi - sebebi: milisaniye degerinin basamak sayisinin degismesi 

// todo: pop up "are you sure?" for reset button 
// document.querySelector('#splitbutton').addEventListener('click', function() {
//     console.log("split button pressed");
// });

// todo: pause durumunda saymanin durdurulmasi 
// todo: pause log'unun yazdirilmasi - pause tusu hem split hem pause anlamina geliyor. 
// todo: split log'unun yazdirilmasi

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
        let passedTimeMiliSecond = passedTime%999;
        let passedTimeSecond = Math.floor((passedTime/999)%1000)%60;
        let passedTimeMinute = Math.floor((((passedTime/59)/1000)%1000)%60);
        let passedTimeHour = Math.floor(((((passedTime/59)/60)/1000)%1000)%60);

        document.querySelector('.stopWatchDisplay').textContent = `${passedTimeHour}:${passedTimeMinute}:${passedTimeSecond}.${passedTimeMiliSecond}`;        
    },1);


});
 

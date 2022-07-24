// todo = yazdirilan zaman degerinin soldan saga kaymasi - sebebi: milisaniye degerinin basamak sayisinin degismesi 



document.querySelector('#startButton').addEventListener('click', function() { 

    let startButtonText = document.querySelector("#startButton");

    if (startButtonText.innerHTML === "Start") {
        startButtonText.innerHTML = "Pause";
    } else {
        startButtonText.innerHTML = "Start";
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




});



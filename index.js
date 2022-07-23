// mode = 0 - not started  
// mode = 1 - paused  
// mode = 2 - running
let mode = 0;

document.querySelector('#startButton').addEventListener('click', function() { 
    mode = 2; // runnnig 
    // let startTime = Date.now(); 
    // let passedTime = Date.now() - startTime; 

    // document.querySelector('.stopWatchDisplay').textContent = "asd";

    setInterval( () => {
        document.querySelector('.stopWatchDisplay').textContent = Date.now();
        
    },1);

    // mode = 2 - running
    if (mode === 2) {
        document.querySelector('#startButton').textContent = "Pause";                
        mode = 1; // mode = 1 - paused  
        console.log(`if mode === 2 icindeyiz, mode = ${mode}`);
    }

    document.querySelector('#startButton').addEventListener('click', function() {
        // mode = 1 - paused
        if (mode === 1) {        
            document.querySelector('#startButton').textContent = "Start";        
            mode = 2; // mode = 2 - running  
            console.log(`if mode === 1 icindeyiz, mode = ${mode}`);
        }
    });


});


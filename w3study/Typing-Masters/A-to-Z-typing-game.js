document.addEventListener("DOMContentLoaded",()=>{
    const container=document.getElementById("bubble-container");
    const startScreen=document.getElementById("start-screen");
    const startBtn=document.getElementById("start-btn");
    const countdownEl=document.getElementById("countdown");
    const timerDisplay=document.getElementById("timer");
    const errorsDisplay=document.getElementById("errors");
    const scoreDisplay=document.getElementById("score");
    const resultScreen=document.getElementById("result-screen");
    const resultTime=document.getElementById("result-time");
    const resultErrors=document.getElementById("result-errors");
    const resultAccuracy=document.getElementById("result-accuracy");
    const resultSpeed=document.getElementById("result-speed");
    const restartBtn=document.getElementById("restart-btn");

    let bubbles=[],currentIndex=0,errors=0,startTime,timerInterval,gameActive=false;

    // 🔊 Audio setup
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let popBuffer = null;

    // Pop sound file load karna
    fetch("https://deepeweb.github.io/Sounds/tab-sound.mp3")
      .then(res => res.arrayBuffer())
      .then(data => audioCtx.decodeAudioData(data))
      .then(buffer => { popBuffer = buffer; });

    function playPopSound(){
        if (!popBuffer) return;
        const source = audioCtx.createBufferSource();
        source.buffer = popBuffer;
        source.connect(audioCtx.destination);
        source.start(0);
    }

    function createBubbles(){
        container.innerHTML="";bubbles=[];
        const radius = container.clientWidth / 2.5;  
        const cx=container.clientWidth/2; 
        const cy=container.clientHeight/2;
        for(let i=0;i<26;i++){
            const letter=String.fromCharCode(65+i);
            const angle=(i/26)*(2*Math.PI);
            const x=cx+radius*Math.cos(angle)-30;
            const y=cy+radius*Math.sin(angle)-30;
            const bubble=document.createElement("div");
            bubble.className="bubble";
            bubble.textContent=letter;
            bubble.style.left=`${x}px`;
            bubble.style.top=`${y}px`;
            bubble.dataset.letter=letter;
            container.appendChild(bubble);
            bubbles.push(bubble);
        }
    }

    function startGame(){
        createBubbles();
        currentIndex=0;errors=0;
        timerDisplay.textContent="Time: 0.0s";
        errorsDisplay.textContent="Errors: 0";
        scoreDisplay.textContent="Score: 0";
        resultScreen.style.display="none";
        gameActive=true;
        startTime=Date.now();
        timerInterval=setInterval(updateTimer,100);
        bubbles[currentIndex].classList.add("active");
    }

    function updateTimer(){
        const elapsed=((Date.now()-startTime)/1000).toFixed(1);
        timerDisplay.textContent=`Time: ${elapsed}s`;
    }

    function handleKey(e){
        if(!gameActive)return;
        const char=e.key.toUpperCase();
        if(!/^[A-Z]$/.test(char))return;

        if(char===bubbles[currentIndex].dataset.letter){
            blastBubble(bubbles[currentIndex]);
            currentIndex++;
            if(currentIndex>=bubbles.length){endGame();return;}
            bubbles[currentIndex].classList.add("active");
        }else{
            errors++;errorsDisplay.textContent=`Errors: ${errors}`;
        }
        scoreDisplay.textContent=`Score: ${Math.max(0,currentIndex-errors)}`;
    }

    function blastBubble(bubble){
        bubble.classList.remove("active");
        bubble.style.animation="blast 0.5s forwards";

        // 🔊 Play blast sound
        playPopSound();

        setTimeout(()=>bubble.style.display="none",500);
    }

    function endGame(){
        clearInterval(timerInterval);gameActive=false;
        const totalTime=((Date.now()-startTime)/1000).toFixed(1);
        const accuracy=((26-errors)/26*100).toFixed(1);
        const speed=(26/totalTime*60).toFixed(1);
        resultTime.textContent=`Time: ${totalTime}s`;
        resultErrors.textContent=`Errors: ${errors}`;
        resultAccuracy.textContent=`Accuracy: ${accuracy}%`;
        resultSpeed.textContent=`Score: ${speed}`;
        resultScreen.style.display="flex";
    }

    function startCountdown(callback){
        let count=3;
        countdownEl.style.display="block";
        countdownEl.textContent=count;
        const interval=setInterval(()=>{
            count--;
            if(count>0){
                countdownEl.textContent=count;
            }else{
                clearInterval(interval);
                countdownEl.style.display="none";
                callback();
            }
        },1000);
    }

    startBtn.addEventListener("click",()=>{
        startScreen.style.display="none";
        startCountdown(startGame);
    });

    restartBtn.addEventListener("click",()=>{
        resultScreen.style.display="none";
        startCountdown(startGame);
    });

    document.addEventListener("keydown",handleKey);
});

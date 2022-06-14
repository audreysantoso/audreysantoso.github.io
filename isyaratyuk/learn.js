// LEARN 
var learnVid = document.getElementById("learn-vid");
var learnButton = document.getElementById("learn-play-pause");


//to play/pause the video
function learnPlayPause() {
    if (learnVid.paused){
        learnButton.style.backgroundImage = "url('images/pause.svg')";
        learnVid.play();
    } else {
        learnButton.style.backgroundImage = "url('images/play.svg')";
        learnVid.pause();
    }
}

//video progress bar
var learnProgress = document.getElementById("learn-progress");
var learnInterval = setInterval(learnProgressLoop);
function learnProgressLoop(){

    if (learnVid.currentTime > 0) {
        learnProgress.value = Math.round((learnVid.currentTime / learnVid.duration) * 100);
        // alert(learnProgress.value);
        if(learnProgress.value >= 100){
            learnStopInterval();
            document.getElementById("learn-screen-black").style.zIndex="99";
            document.getElementById("learn-pop-up-question").style.visibility="visible";
            document.getElementById("learn-pop-up-question").style.zIndex="100";
            learnButton.style.backgroundImage = "url('images/play.svg')";
            document.getElementById("learn-correct").play();
            document.getElementById("learn-wrongA").play();
            document.getElementById("learn-wrongB").play();
        }
    }
}
//video progress bar (to stop the loop)
learnProgressLoop();
function learnStopInterval() {
    clearInterval(learnInterval);
}

//to change to next video
function learnNext(){
    document.getElementById("learn-screen-black").style.zIndex="-200";
    document.getElementById("learn-pop-up-question").style.zIndex="-200";
    document.getElementById("learn-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("learn").style.display="none";
    document.getElementById("eat").style.zIndex="10";
    document.getElementById("eat").style.left="0";
    eatVid.play();
    eatButton.style.backgroundImage="url('images/pause.svg')";
}

//to display correct msg and proceed to next video
function learnCorrect() {
    document.getElementById("learn-screen-black").style.zIndex="999";
    document.getElementById('learn-msg-correct').style.visibility="visible";
    document.getElementById('learn-msg-correct').style.zIndex="1000";
    setTimeout(learnNext,1000);
}

//to hide the wrong message (option A)
function learnWrongAHide() {
    document.getElementById("learn-screen-black").style.zIndex="-200";
    document.getElementById('learn-msg-wrong1').style.visibility="hidden";
    document.getElementById('learn-msg-wrong1').style.zIndex="-200";
}

//to display the wrong message (option A)
function learnWrongA() {
    document.getElementById("learn-screen-black").style.zIndex="999";
    document.getElementById('learn-msg-wrong1').style.visibility="visible";
    document.getElementById('learn-msg-wrong1').style.zIndex="1000";
    setTimeout(learnWrongAHide,1000);
}

//to hide the wrong message (option B)
function learnWrongBHide() {
    document.getElementById("learn-screen-black").style.zIndex="-200";
    document.getElementById('learn-msg-wrong2').style.visibility="hidden";
    document.getElementById('learn-msg-wrong2').style.zIndex="-200";
}

//to display the wrong message (option B)
function learnWrongB() {
    document.getElementById("learn-screen-black").style.zIndex="999";
    document.getElementById('learn-msg-wrong2').style.visibility="visible";
    document.getElementById('learn-msg-wrong2').style.zIndex="1000";
    setTimeout(learnWrongBHide,1000);
}
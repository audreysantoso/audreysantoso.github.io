// EAT
var eatVid = document.getElementById("eat-vid");
var eatButton = document.getElementById("eat-play-pause");

//to play/pause the video
function eatPlayPause() {
    if (eatVid.paused){
        eatButton.style.backgroundImage = "url('images/pause.svg')";
        eatVid.play();
    } else {
        eatButton.style.backgroundImage = "url('images/play.svg')";
        eatVid.pause();
    }
}

//video progress bar
var eatProgress = document.getElementById("eat-progress");
var eatInterval = setInterval(eatProgressLoop);

function eatProgressLoop(){
    if (eatVid.currentTime > 0) {
        eatProgress.value = Math.round((eatVid.currentTime / eatVid.duration) * 100);
        if(eatProgress.value >= 100){
            eatStopInterval();
            document.getElementById("eat-screen-black").style.zIndex="99";
            document.getElementById("eat-pop-up-question").style.visibility="visible";
            document.getElementById("eat-pop-up-question").style.zIndex="100";
            eatButton.style.backgroundImage = "url('images/play.svg')";
            document.getElementById("eat-correct").play();
            document.getElementById("eat-wrongA").play();
            document.getElementById("eat-wrongB").play();
        }
    }
}
//video progress bar (to stop the loop)
eatProgressLoop();
function eatStopInterval() {
    clearInterval(eatInterval);
}

//to change to next video
function eatNext() {
    document.getElementById("eat-pop-up-question").style.zIndex="-200";
    document.getElementById("eat-learn-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("eat-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("eat").style.display="none";
    document.getElementById("help").style.zIndex="10";
    document.getElementById("help").style.left="0";
    helpVid.play();
    helpButton.style.backgroundImage="url('images/pause.svg')";
}

//to display correct msg and proceed to next video
function eatCorrect() {
    document.getElementById("eat-screen-black").style.zIndex="999";
    document.getElementById('eat-msg-correct').style.visibility="visible";
    document.getElementById('eat-msg-correct').style.zIndex="1000";
    setTimeout(eatNext,1000);
}

//to hide the wrong message (option A)
function eatWrongAHide() {
    document.getElementById("eat-screen-black").style.zIndex="-200";
    document.getElementById('eat-msg-wrong1').style.visibility="hidden";
    document.getElementById('eat-msg-wrong1').style.zIndex="-200";
}

//to display the wrong message (option A)
function eatWrongA() {
    document.getElementById("eat-screen-black").style.zIndex="999";
    document.getElementById('eat-msg-wrong1').style.visibility="visible";
    document.getElementById('eat-msg-wrong1').style.zIndex="1000";
    setTimeout(eatWrongAHide,1000);
}

//to hide the wrong message (option B)
function eatWrongBHide() {
    document.getElementById("eat-screen-black").style.zIndex="-200";
    document.getElementById('eat-msg-wrong2').style.visibility="hidden";
    document.getElementById('eat-msg-wrong2').style.zIndex="-200";
}

//to display the wrong message (option B)
function eatWrongB() {
    document.getElementById("eat-screen-black").style.zIndex="999";
    document.getElementById('eat-msg-wrong2').style.visibility="visible";
    document.getElementById('eat-msg-wrong2').style.zIndex="1000";
    setTimeout(eatWrongBHide,1000);
}
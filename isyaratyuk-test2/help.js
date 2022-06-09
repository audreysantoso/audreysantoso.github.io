// HELP
var helpVid = document.getElementById("help-vid");
var helpButton = document.getElementById("help-play-pause");

//to play/pause the video
function helpPlayPause() {
    if (helpVid.paused){
        helpButton.style.backgroundImage = "url('images/pause.svg')";
        helpVid.play();
    } else {
        helpButton.style.backgroundImage = "url('images/play.svg')";
        helpVid.pause();
    }
}

//video progress bar
var helpProgress = document.getElementById("help-progress");
var helpInterval = setInterval(helpProgressLoop);

function helpProgressLoop(){
    if (helpVid.currentTime > 0) {
        helpProgress.value = Math.round((helpVid.currentTime / helpVid.duration) * 100);
        if(helpProgress.value >= 100){
            helpStopInterval();
            document.getElementById("help-screen-black").style.zIndex="99";
            document.getElementById("help-pop-up-question").style.visibility="visible";
            document.getElementById("help-pop-up-question").style.zIndex="100";
            helpButton.style.backgroundImage = "url('images/play.svg')";
            document.getElementById("help-correct").play();
            document.getElementById("help-wrongA").play();
            document.getElementById("help-wrongB").play();
        }
    }
}
//video progress bar (to stop the loop)
helpProgressLoop();
function helpStopInterval() {
    clearInterval(helpInterval);
}

//to change to next video
function helpNext() {
    document.getElementById("help-pop-up-question").style.zIndex="-200";
    document.getElementById("help-learn-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("help-eat-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("help-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("help").style.display="none";
    document.getElementById("thx").style.zIndex="10";
    document.getElementById("thx").style.left="0";
    thxVid.play();
    thxButton.style.backgroundImage="url('images/pause.svg')";
}

//to display correct msg and proceed to next video
function helpCorrect() {
    document.getElementById("help-screen-black").style.zIndex="999";
    document.getElementById('help-msg-correct').style.visibility="visible";
    document.getElementById('help-msg-correct').style.zIndex="1000";
    setTimeout(helpNext,1000);
}

//to hide the wrong message (option A)
function helpWrongAHide() {
    document.getElementById("help-screen-black").style.zIndex="-200";
    document.getElementById('help-msg-wrong1').style.visibility="hidden";
    document.getElementById('help-msg-wrong1').style.zIndex="-200";
}

//to display the wrong message (option A)
function helpWrongA() {
    document.getElementById("help-screen-black").style.zIndex="999";
    document.getElementById('help-msg-wrong1').style.visibility="visible";
    document.getElementById('help-msg-wrong1').style.zIndex="1000";
    setTimeout(helpWrongAHide,1000);
}

//to hide the wrong message (option B)
function helpWrongBHide() {
    document.getElementById("help-screen-black").style.zIndex="-200";
    document.getElementById('help-msg-wrong2').style.visibility="hidden";
    document.getElementById('help-msg-wrong2').style.zIndex="-200";
}

//to display the wrong message (option B)
function helpWrongB() {
    document.getElementById("help-screen-black").style.zIndex="999";
    document.getElementById('help-msg-wrong2').style.visibility="visible";
    document.getElementById('help-msg-wrong2').style.zIndex="1000";
    setTimeout(helpWrongBHide,1000);
}
// URWEL
var urwelVid = document.getElementById("urwel-vid");
var urwelButton = document.getElementById("urwel-play-pause");

//to play/pause the video
function urwelPlayPause() {
    if (urwelVid.paused){
        urwelButton.style.backgroundImage = "url('images/pause.svg')";
        urwelVid.play();
    } else {
        urwelButton.style.backgroundImage = "url('images/play.svg')";
        urwelVid.pause();
    }
}

//video progress bar
var urwelProgress = document.getElementById("urwel-progress");
var urwelInterval = setInterval(urwelProgressLoop);

function urwelProgressLoop(){
    if (urwelVid.currentTime > 0) {
        // alert(urwelVid.currentTime);
        urwelProgress.value = Math.round((urwelVid.currentTime / urwelVid.duration) * 100);
        if(urwelProgress.value >= 100){
            urwelStopInterval();
            document.getElementById("urwel-screen-black").style.zIndex="99";
            document.getElementById("urwel-pop-up-question").style.visibility="visible";
            document.getElementById("urwel-pop-up-question").style.zIndex="100";
            urwelButton.style.backgroundImage = "url('images/play.svg')";
            document.getElementById("urwel-correct").play();
            document.getElementById("urwel-wrongA").play();
            document.getElementById("urwel-wrongB").play();
        }
    }
}
//video progress bar (to stop the loop)
urwelProgressLoop();
function urwelStopInterval() {
    clearInterval(urwelInterval);
}

//to change to next video
function urwelNext() {
    document.getElementById("urwel-pop-up-question").style.zIndex="-200";
    document.getElementById("urwel-learn-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("urwel-eat-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("urwel-help-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("urwel-thx-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("urwel-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("urwel").style.display="none";
    document.getElementById("closing").style.zIndex="10";
    document.getElementById("closing").style.left="0";
    closingVid.play();
    closingButton.style.backgroundImage="url('images/pause.svg')";
}

//to display correct msg and proceed to next video
function urwelCorrect() {
    document.getElementById("urwel-screen-black").style.zIndex="999";
    document.getElementById('urwel-msg-correct').style.visibility="visible";
    document.getElementById('urwel-msg-correct').style.zIndex="1000";
    setTimeout(urwelNext,1000);
}

//to hide the wrong message (option A)
function urwelWrongAHide() {
    document.getElementById("urwel-screen-black").style.zIndex="-200";
    document.getElementById('urwel-msg-wrong1').style.visibility="hidden";
    document.getElementById('urwel-msg-wrong1').style.zIndex="-200";
}

//to display the wrong message (option A)
function urwelWrongA() {
    document.getElementById("urwel-screen-black").style.zIndex="999";
    document.getElementById('urwel-msg-wrong1').style.visibility="visible";
    document.getElementById('urwel-msg-wrong1').style.zIndex="1000";
    setTimeout(urwelWrongAHide,1000);
}

//to hide the wrong message (option B)
function urwelWrongBHide() {
    document.getElementById("urwel-screen-black").style.zIndex="-200";
    document.getElementById('urwel-msg-wrong2').style.visibility="hidden";
    document.getElementById('urwel-msg-wrong2').style.zIndex="-200";
}

//to display the wrong message (option B)
function urwelWrongB() {
    document.getElementById("urwel-screen-black").style.zIndex="999";
    document.getElementById('urwel-msg-wrong2').style.visibility="visible";
    document.getElementById('urwel-msg-wrong2').style.zIndex="1000";
    setTimeout(urwelWrongBHide,1000);
}
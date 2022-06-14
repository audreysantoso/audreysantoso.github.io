// THX
var thxVid = document.getElementById("thx-vid");
var thxButton = document.getElementById("thx-play-pause");

//to play/pause the video
function thxPlayPause() {
    if (thxVid.paused){
        thxButton.style.backgroundImage = "url('images/pause.svg')";
        thxVid.play();
    } else {
        thxButton.style.backgroundImage = "url('images/play.svg')";
        thxVid.pause();
    }
}

//video progress bar
var thxProgress = document.getElementById("thx-progress");
var thxInterval = setInterval(thxProgressLoop);

function thxProgressLoop(){
    if (thxVid.currentTime > 0) {
        thxProgress.value = Math.round((thxVid.currentTime / thxVid.duration) * 100);
        if(thxProgress.value >= 100){
            thxStopInterval();
            document.getElementById("thx-screen-black").style.zIndex="99";
            document.getElementById("thx-pop-up-question").style.visibility="visible";
            document.getElementById("thx-pop-up-question").style.zIndex="100";
            thxButton.style.backgroundImage = "url('images/play.svg')";
            document.getElementById("thx-correct").play();
            document.getElementById("thx-wrongA").play();
            document.getElementById("thx-wrongB").play();
        }
    }
}
//video progress bar (to stop the loop)
thxProgressLoop();
function thxStopInterval() {
    clearInterval(thxInterval);
}

//to change to next video
function thxNext() {
    document.getElementById("thx-pop-up-question").style.zIndex="-200";
    document.getElementById("thx-learn-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("thx-eat-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("thx-help-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("thx-progress-dot").style.backgroundColor="#6391F9";
    document.getElementById("thx").style.display="none";
    document.getElementById("urwel").style.zIndex="10";
    document.getElementById("urwel").style.left="0";
    urwelVid.play();
    urwelButton.style.backgroundImage="url('images/pause.svg')";
}

//to display correct msg and proceed to next video
function thxCorrect() {
    document.getElementById("thx-screen-black").style.zIndex="999";
    document.getElementById('thx-msg-correct').style.visibility="visible";
    document.getElementById('thx-msg-correct').style.zIndex="1000";
    setTimeout(thxNext,1000);
}

//to hide the wrong message (option A)
function thxWrongAHide() {
    document.getElementById("thx-screen-black").style.zIndex="-200";
    document.getElementById('thx-msg-wrong1').style.visibility="hidden";
    document.getElementById('thx-msg-wrong1').style.zIndex="-200";
}

//to display the wrong message (option A)
function thxWrongA() {
    document.getElementById("thx-screen-black").style.zIndex="999";
    document.getElementById('thx-msg-wrong1').style.visibility="visible";
    document.getElementById('thx-msg-wrong1').style.zIndex="1000";
    setTimeout(thxWrongAHide,1000);
}

//to hide the wrong message (option B)
function thxWrongBHide() {
    document.getElementById("thx-screen-black").style.zIndex="-200";
    document.getElementById('thx-msg-wrong2').style.visibility="hidden";
    document.getElementById('thx-msg-wrong2').style.zIndex="-200";
}

//to display the wrong message (option B)
function thxWrongB() {
    document.getElementById("thx-screen-black").style.zIndex="999";
    document.getElementById('thx-msg-wrong2').style.visibility="visible";
    document.getElementById('thx-msg-wrong2').style.zIndex="1000";
    setTimeout(thxWrongBHide,1000);
}
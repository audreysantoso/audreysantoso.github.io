// CLOSING
var closingVid = document.getElementById("closing-vid");
var closingButton = document.getElementById("closing-play-pause");

//to play/pause the video
function closingPlayPause() {
    if (closingVid.paused){
        closingButton.style.backgroundImage = "url('images/pause.svg')";
        closingVid.play();
    } else {
        closingButton.style.backgroundImage = "url('images/play.svg')";
        closingVid.pause();
    }
}

//video progress bar
var closingProgress = document.getElementById("closing-progress");
var closingInterval = setInterval(closingProgressLoop);

function closingProgressLoop(){
    if (closingVid.currentTime > 0) {
        closingProgress.value = Math.round((closingVid.currentTime / closingVid.duration) * 100);
        if(closingProgress.value >= 100){
            closingStopInterval();
            location.replace("finish.html");
        }
    }
}
//video progress bar (to stop the loop)
closingProgressLoop();
function closingStopInterval() {
    clearInterval(closingInterval);
}
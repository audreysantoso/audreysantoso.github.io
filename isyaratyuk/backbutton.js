function backButton(theVid, theButton, thePopUp, theScreen){
    document.getElementById(theVid).pause();
    document.getElementById(theButton).style.backgroundImage = "url('images/play.svg')";
    document.getElementById(thePopUp).style.display="block";
    document.getElementById(theScreen).style.zIndex="99";
};

function backContinueButton(theVid, theButton, thePopUp, theScreen){
    document.getElementById(theVid).play();
    document.getElementById(theButton).style.backgroundImage = "url('images/pause.svg')";
    document.getElementById(thePopUp).style.display="none";
    document.getElementById(theScreen).style.zIndex="-1000";
};
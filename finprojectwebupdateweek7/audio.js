function playaudio(x,y,z,a,b){
    var audio = document.getElementById(x);
    audio.play();
    document.getElementById(y).style.display = "inline";
    document.getElementById(z).style.display = "none";
    var audioa = document.getElementById(a);
    audioa.pause();
    var audiob = document.getElementById(b);
    audiob.pause();
}

function pauseaudio(x,y,z){
    var audio = document.getElementById(x);
    audio.pause();
    document.getElementById(y).style.display = "inline";
    document.getElementById(z).style.display = "none";
}

function hidebutton(a,b,c,d,e,f){
    document.getElementById(a).style.display = "inline";
    document.getElementById(b).style.display = "none";
    document.getElementById(c).style.display = "none";
    document.getElementById(d).style.display = "none";
    document.getElementById(e).style.display = "none";
    document.getElementById(f).style.display = "none";
}
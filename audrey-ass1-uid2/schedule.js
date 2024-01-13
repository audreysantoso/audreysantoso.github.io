var app = angular.module("myApp", []);
app.controller("toairport", function($scope) {
  $scope.airport = [
    {
      trigger:'amang',
      from: 'Manggarai',
      depart: ['05:37', '06:37', '08:07', '09:07', '10:37', '11:37', '13:07', '15:07', '16:37', '17:37']
    },
    {
      trigger:'abni',
      from: 'BNI-City',
      depart: ['05:46', '06:46', '08:16', '09:16', '10:46', '11:46', '13:16', '15:16', '16:46', '17:46']
    },
    {
      trigger:'aduri',
      from: 'Duri',
      depart: ['06:01', '07:01', '08:31', '09:31', '11:01', '12:01', '13:31', '15:31', '17:01', '18:01']
    },
    {
      trigger:'abatu',
      from: 'Batu-Ceper',
      depart: ['06:22', '07:22', '08:52', '09:52', '11:22', '12:22', '13:52', '15:52', '17:22', '18:22']
    }
  ];
  $scope.soetaaa = ['06:33', '07:33', '09:03', '10:03', '11:33', '12:33', '14:03', '16:03', '17:33', '18:33'];
});

app.controller("tojkt", function($scope) {
  $scope.jkt = [
    {
      trigger:'jairp',
      from: 'Airport',
      depart: ['06:49', '07:49', '09:19', '10:19', '11:49', '12:49', '14:19', '16:19', '17:49', '18:49']
    },
    {
      trigger:'jbatu',
      from: 'Batu-Ceper',
      depart: ['07:01', '08:01', '09:31', '10:31', '12:01', '13:01', '14:31', '16:31', '18:01', '19:01']
    },
    {
      trigger:'jduri',
      from: 'Duri',
      depart: ['07:25', '08:25', '09:55', '10:55', '12:25', '13:25', '14:55', '16:55', '18:25', '19:25']
    },
    {
      trigger:'jbni',
      from: 'BNI-City',
      depart: ['07:38', '08:38', '10:08', '11:08', '12:38', '13:38', '15:08', '17:08', '18:38', '19:38']
    }
  ];
  $scope.manggaraiii = ['07:45', '08:45', '10:15', '11:15', '12:45', '13:45', '15:15', '17:15', '18:45', '19:45'];
});


function switchme(x,y,z) {
  var allsc= document.getElementsByClassName(x);
    for(var i=0, l=allsc.length; i<l; i++){
     allsc[i].style.display = "none";
    }
    document.getElementById(z).style.display = "block";
    document.getElementById(y).style.display = "block";
}


function switchmeair() {
    document.getElementById("empty-airport").style.display = "none";
}

function switchmejkt() {
    document.getElementById("empty-manggarai").style.display = "none";
}

function switchairport(){
  document.getElementById("soetabox").style.display = "block";
  document.getElementById("manggaraibox").style.display = "none";
  document.getElementById("buttonairport").style.background = "linear-gradient(180deg, #F16E25 0%, #FF5B00 100%)";
  document.getElementById("buttonairport").style.boxShadow = "0px 4px 8px rgba(241, 110, 37, 0.4)";
  document.getElementById("buttonjkt").style.background = "white";
  document.getElementById("buttonjkt").style.boxShadow = "none";
  document.getElementById("twdairport").style.color = "white";
  document.getElementById("twdjkt").style.color = "#F16E25";
  document.getElementById("twdjkticon").style.backgroundImage='url("images/monas-o.svg")';
  document.getElementById("twdairporticon").style.backgroundImage='url("images/plane-w.svg")';
}

function switchjkt(){
  document.getElementById("soetabox").style.display = "none";
  document.getElementById("manggaraibox").style.display = "block";
  document.getElementById("buttonjkt").style.background = "linear-gradient(180deg, #F16E25 0%, #FF5B00 100%)";
  document.getElementById("buttonjkt").style.boxShadow = "0px 4px 8px rgba(241, 110, 37, 0.4)";
  document.getElementById("buttonairport").style.background = "white";
  document.getElementById("buttonairport").style.boxShadow = "none";
  document.getElementById("twdairport").style.color = "#F16E25";
  document.getElementById("twdjkt").style.color = "white";
  document.getElementById("twdjkticon").style.backgroundImage='url("images/monas-w.svg")';
  document.getElementById("twdairporticon").style.backgroundImage='url("images/plane-o.svg")';
}











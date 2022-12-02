announcement = document.getElementById("announcement").innerHTML;
devtext = document.getElementById("devtext").innerHTML;
var handnum;
var enemyhandnum;

function prestart(){
  target = document.getElementById("top-page");
  target.className = "play";
  reload();
  }

  function helpbutton(){
    var target = document.getElementById("top-page");
    var announcement = document.getElementById("announcement");
    var userhands = document.getElementById("user-hands");
    var help = document.getElementById("help");
    var resulttextblock = document.getElementById("resultblock");
    target.className = "help";
    announcement.className = "help";
    userhands.className = "help";
    help.className = "disp";
    resulttextblock.className = "help"
  }

function startbutton() {
  var touchblocker = document.getElementById("touchblocker");
  touchblocker.className = "finish";

    announcement.innerHTML = 'Ready';

    window.setTimeout(function(){
    announcement.innerHTML = 'Rock';
    },3500);
    window.setTimeout(function(){
    announcement.innerHTML = 'Scissors';
    },4150);
    window.setTimeout(function(){
    announcement.innerHTML = 'Paper';
    },4800);
    window.setTimeout(function(){
    announcement.innerHTML = '1';
    },5800);
    window.setTimeout(function(){
    announcement.innerHTML = '2';
    },6400);
    window.setTimeout(function(){
      touchblocker.className = "";
    },7000);
}

function reset(){
  target = document.getElementById("top-page");
  target.className = "";
}

function userhandselect(num){
  announcement.innerHTML = '3';
  devtext.innerHTML = "Selecting";
  var touchblocker = document.getElementById("touchblocker");
  touchblocker.className = "finish";
  handnum = num;
  enemyhandnum = Math.floor(Math.random() * 3);
  userselect(handnum);
  devtext.innerHTML = "MyHandIs " + handnum + " EnemyHandIs" + enemyhandnum;
  devtext.innerHTML = "ReadyJudge";
  judge(handnum,enemyhandnum);
}

function userselect(handnum){
  devtext.innerHTML = "Selected " + handnum;
let rockhand = document.getElementById("rock");
let scissorshand = document.getElementById("scissors");
let paperhand = document.getElementById("paper");
if (handnum == 0){
  if (rockhand.className == null || rockhand.className == ""){
    rockhand.className = "select";
  } else {
    rockhand.className = "";
  }
  if (scissorshand.className == null || scissorshand.className == ""){
    scissorshand.className = "notselect";
  } else {
    scissorshand.className = "";
  }
  if (paperhand.className == null || paperhand.className == ""){
    paperhand.className = "notselect";
  } else {
    paperhand.className = "";
  }
}
else if (handnum == 1){
  if (rockhand.className == null || rockhand.className == ""){
    rockhand.className = "notselect";
  } else {
    rockhand.className = "";
  }
  if (scissorshand.className == null || scissorshand.className == ""){
    scissorshand.className = "select";
  } else {
    scissorshand.className = "";
  }
  if (paperhand.className == null || paperhand.className == ""){
    paperhand.className = "notselect";
  } else {
    paperhand.className = "";
  }
}
else if (handnum == 2){
  if (rockhand.className == null || rockhand.className == ""){
    rockhand.className = "notselect";
  } else {
    rockhand.className = "";
  }
  if (scissorshand.className == null || scissorshand.className == ""){
    scissorshand.className = "notselect";
  } else {
    scissorshand.className = "";
  }
  if (paperhand.className == null || paperhand.className == ""){
    paperhand.className = "select";
  } else {
    paperhand.className = "";
  }
}
}

function judge(handnum,enemyhandnum){
  var enemyhand = document.getElementById("enemy-hand");
  if (handnum == 0){
    if (enemyhandnum == 0){
      enemyhand.className = "rock";
      draw();
    }
    else if (enemyhandnum == 1){
      enemyhand.className = "scissors";
      win();
    }
    else if (enemyhandnum == 2){
      enemyhand.className = "paper";
      lose();
    }
    else{
      error();
    }
  }
  else if (handnum == 1){
    if (enemyhandnum == 1){
      enemyhand.className = "scissors";
      draw();
    }
    else if (enemyhandnum == 2){
      enemyhand.className = "paper";
      win();
    }
    else if (enemyhandnum == 0){
      enemyhand.className = "rock";
      lose();
    }
    else{
      error();
    }
  }
  else if (handnum == 2){
    if (enemyhandnum == 2){
      enemyhand.className = "paper";
      draw();
    }
    else if (enemyhandnum == 0){
      enemyhand.className = "rock";
      win();
    }
    else if (enemyhandnum == 1){
      enemyhand.className = "scissors";
      lose();
    }
    else{
      error();
    }
  }
  else{
    error();
  }
}

function win(){
  var resulttextblock = document.getElementById("resultblock");
  var resulttext = document.getElementById("result");
  var reloadbutton = document.getElementById("reloadbutton");
  var reloadbuttonimg = document.getElementById("reloadbuttonimg");
  resulttext.innerHTML = "Win";
  resulttext.className = "finish";
  reloadbutton.className = "finish";
  reloadbuttonimg.className = "finish";
  resulttextblock.className = "finish";
  devtext.innerHTML = "W";
}

function lose(){
  var resulttextblock = document.getElementById("resultblock");
  var resulttext = document.getElementById("result");
  var reloadbutton = document.getElementById("reloadbutton");
  var reloadbuttonimg = document.getElementById("reloadbuttonimg");
  resulttext.innerHTML = "Lose";
  resulttext.className = "finish";
  reloadbutton.className = "finish";
  reloadbuttonimg.className = "finish";
  resulttextblock.className = "finish";
  devtext.innerHTML = "L";
}

function draw(){  
  var resulttextblock = document.getElementById("resultblock");
  var resulttext = document.getElementById("result");
  resulttext.innerHTML = "Draw";
  resulttext.className = "finish";
  resulttextblock.className = "finish";
  devtext.innerHTML = "D";
  window.setTimeout(function(){
    reload();
  },1750);
}

function error(){
  var resulttext = document.getElementById("result");
  var reloadbutton = document.getElementById("reloadbutton");
  resulttext.innerHTML = "Whoops something went wrong.";
  resulttext.className = "error";
  devtext.innerHTML = "E";
}

function reload(){
  let rockhand = document.getElementById("rock");
  let scissorshand = document.getElementById("scissors");
  let paperhand = document.getElementById("paper");
  var resulttextblock = document.getElementById("resultblock");
  var resulttext = document.getElementById("result");
  var reloadbutton = document.getElementById("reloadbutton");
  var reloadbuttonimg = document.getElementById("reloadbuttonimg");
  var enemyhand = document.getElementById("enemy-hand");
  var help = document.getElementById("help");
  var announcement = document.getElementById("announcement");
  var userhands = document.getElementById("user-hands");
  rockhand.className = "";
  scissorshand.className = "";
  paperhand.className = "";
  resulttextblock.className = "";
  resulttext.className = "";
  reloadbutton.className = "";
  reloadbuttonimg.className = "";
  enemyhand.className = "";
  announcement.innerHTML = "";
  help.className = "";
  announcement.className = "";
  userhands.className = "";
  startbutton();
}
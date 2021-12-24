import videojs from 'video.js';
var video = document.getElementById("video");
var video2 = document.getElementById("video2");
var video3 = document.getElementById("video3");
var videoPlayer = document.getElementById("videoPlayer");

var timeStarted = -1;
var timeStarted2 = -1;
var timeStarted3 = -1;
var timePlayed = 0;
var timePlayed2 = 0;
var timePlayed3 = 0;
var duration1 = 0;
var duration2 = 0;
var duration3 = 0;
/*
var timer = 0,
    timeTotal = 250000,
    timeCount = 20,
    timeStart = 0,
    cFlag;

function updateProgress(percentage) {
    var x = (percentage/timeTotal)*100,
        y = x.toFixed(3);
        var totalSec= (percentage / 1000);
         var min = parseInt(totalSec/60);
         var sec = parseInt(totalSec%60);
         var hr= parseInt(min/60);
          min = parseInt(min % 60);
    $('#pbar_innerdiv').css("width", x + "%");
    $('#pbar_innertext').css("left", x + "%").text(hr+":"+min+":"+sec + "");
}

function animateUpdate() {
    var perc = new Date().getTime() - timeStart;
    if(perc < timeTotal) {
        updateProgress(perc);
        timer = setTimeout(animateUpdate, timeCount);
    } else {
    	  updateProgress(timeTotal);
    }
}

$(document).ready(function() {
    $('#pbar_outerdiv').click(function() {
        if (cFlag == undefined) {
            clearTimeout(timer);
            cFlag = true;
            timeStart = new Date().getTime();
            animateUpdate();
        }
        else if (!cFlag) {
            cFlag = true;
            animateUpdate();
        }
        else {
            clearTimeout(timer);
            cFlag = false;
        }
    });
});
*/


// If video metadata is laoded get duration
if(video.readyState > 0  ){
  getDuration.call(video);
  //getDuration2.call(video2);
 // getDuration3.call(video3);
} else if(video2.readyState > 0 ){
  getDuration2.call(video2);
}
else if (video3.readyState > 0 ){
  getDuration3.call(video3);
}
//If metadata not loaded, use event to get it
else
{
  video.addEventListener('loadedmetadata', getDuration);
  video.addEventListener('loadedmetadata', getDuration2);
  video.addEventListener('loadedmetadata', getDuration3);
}
// remember time user started the video
function videoStartedPlaying() {
  timeStarted = new Date().getTime()/1000;
}
function videoStartedPlaying2() {
  timeStarted2 = new Date().getTime()/1000;
}
function videoStartedPlaying3() {
  timeStarted3 = new Date().getTime()/1000;
}
function videoStoppedPlaying(event) {
  // Start time less then zero means stop event was fired vidout start event
  if(timeStarted>0) {
    var playedFor = new Date().getTime()/1000 - timeStarted;
    timeStarted = -1;
    // add the new number of seconds played
    timePlayed+=playedFor;
  }

  document.getElementById("played").innerHTML = Math.round(timePlayed)+"";
  // Count as complete only if end of video was reached
  if(timePlayed>=duration1 && event.type=="ended") {
    document.getElementById("status1").className="complete";
  }

}

function videoStoppedPlaying2(event) {
  // Start time less then zero means stop event was fired vidout start event
  if(timeStarted2>0) {
    var playedFor = new Date().getTime()/1000 - timeStarted2;
    timeStarted2 = -1;
    // add the new number of seconds played
    timePlayed2+=playedFor;
  }


  document.getElementById("played2").innerHTML = Math.round(timePlayed2)+"";
  // Count as complete only if end of video was reached
  if(timePlayed2>=duration2 && event.type=="ended") {
    document.getElementById("status1").className="complete";
  }
}

function videoStoppedPlaying3(event) {
  // Start time less then zero means stop event was fired vidout start event
  if(timeStarted3>0) {
    var playedFor = new Date().getTime()/1000 - timeStarted3;
    timeStarted3 = -1;
    // add the new number of seconds played
    timePlayed3+=playedFor;
  }

  document.getElementById("played3").innerHTML = Math.round(timePlayed3)+"";
  // Count as complete only if end of video was reached
  if(timePlayed3>=duration3 && event.type=="ended") {
    document.getElementById("status1").className="complete";
  }

}

function getDuration() {
  duration1 = video.duration;
  document.getElementById("duration1").appendChild(new Text(Math.round(duration1)+""));
  console.log("Duration: ", duration1);
}
function getDuration2() {
  duration2 = video2.duration;
  document.getElementById("duration2").appendChild(new Text(Math.round(duration2)+""));
  console.log("Duration: ", duration2);
}
function getDuration3() {
  duration3 = video3.duration;
  document.getElementById("duration3").appendChild(new Text(Math.round(duration3)+""));
  console.log("Duration: ", duration3);
}



function stopVideo(){
 video.pause();

 video.currentTime=0;

 videoPlayer.style.display = "none";
}

function stopVideo2(){
  video2.pause();

  video2.currentTime=0;

  videoPlayer.style.display = "none";
 }

 function stopVideo3(){
  video3.pause();

  video3.currentTime=0;

  videoPlayer.style.display = "none";
 }




function playVideo(file){
        video.src = file;

        videoPlayer.style.display = "block";
 }

 function playVideo2(file){
  video2.src = file;

  videoPlayer.style.display = "block";
}

function playVideo3(file){
  video3.src = file;

  videoPlayer.style.display = "block";
}




video.addEventListener("play", videoStartedPlaying);
video.addEventListener("playing", videoStartedPlaying);

video2.addEventListener("play", videoStartedPlaying2);
video2.addEventListener("playing", videoStartedPlaying2);

video3.addEventListener("play", videoStartedPlaying3);
video3.addEventListener("playing", videoStartedPlaying3);

video.addEventListener("ended", videoStoppedPlaying);
video.addEventListener("pause", videoStoppedPlaying);

video2.addEventListener("ended", videoStoppedPlaying2);
video2.addEventListener("pause", videoStoppedPlaying2);

video3.addEventListener("ended", videoStoppedPlaying3);
video3.addEventListener("pause", videoStoppedPlaying3);

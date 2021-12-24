var video = document.getElementById("video");
var videoPlayer = document.getElementById("videoPlayer");
var timeStarted = -1;
var timePlayed = 0;
var duration1 = 0;
var progress;

function initializeprogress(data){
  var progress=data;
  console.log(progress['course'])
  setvideo(progress['course'])
}

function hide(){
  console.log('hello')
  //$('.video-player').hide();
}

if(document.getElementById("video").readyState > 0  ){
  console.log('working')
  getDuration.call(video);
}
else
{
  document.getElementById("video").addEventListener('loadedmetadata', getDuration);
}

// remember time user started the video
function videoStartedPlaying() {
  timeStarted = new Date().getTime()/1000;
  console.log(timeStarted)
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
  /*
  if(timePlayed>=duration1 && event.type=="ended") {
    document.getElementById("status1").className="complete";
  }*/
  console.log(timePlayed);
  if(timePlayed > document.getElementById("video").duration && document.getElementById("video").currentTime >= document.getElementById("video").duration){
    console.log('completed');
  }
}


function getDuration() {
  duration1 = video.duration;
  document.getElementById("duration1").appendChild(new Text(Math.round(duration1)+""));
  console.log("Duration: ", duration1);
}

function stopVideo(){
  document.getElementById("video").pause();
  document.getElementById("video").currentTime=0;
  document.getElementsByClassName("video-player")[0].style.display = "none";
}

function playVideo(file){
        document.getElementById("video").src = file;
        document.getElementsByClassName("video-player")[0].style.display = "block";
        $('.video-player').show();
        document.getElementById("video").addEventListener("play", videoStartedPlaying);
        document.getElementById("video").addEventListener("playing", videoStartedPlaying);
        document.getElementById("video").addEventListener("ended", videoStoppedPlaying);
        document.getElementById("video").addEventListener("pause", videoStoppedPlaying);
}

document.getElementById("video").onplay = function(){
  console.log('working')
}

function setvideo(course){
  console.log(course)
  if (course == 'Anxiety'){
    document.getElementById('video1').innerHTML='assets/videos/Anxiety1.mp4'
    document.getElementById('video2').innerHTML='assets/videos/Anxiety2.mp4'
  }
  else if (course =='Depression'){
    document.getElementById('video1').innerHTML='assets/videos/Depression1.mp4'
    document.getElementById('video2').innerHTML='assets/videos/Depression2.mp4'
  }else{
    document.getElementById('video1').innerHTML='assets/videos/Stress1.mp4'
    document.getElementById('video2').innerHTML='assets/videos/Stress2.mp4'
  }
}

function setvideo(course){
  course = course['course']
  if (course =='Anxiety'){
    document.getElementById('video1').innerHTML='assets/videos/Anxiety1.mp4'
    document.getElementById('video2').innerHTML='assets/videos/Anxiety2.mp4'
  }
  else if (course =='Depresssion'){
    document.getElementById('video1').innerHTML='assets/videos/Depression1.mp4'
    document.getElementById('video2').innerHTML='assets/videos/Depression2.mp4'
  }else{
    document.getElementById('video1').innerHTML='assets/videos/Stress1.mp4'
    document.getElementById('video2').innerHTML='assets/videos/Stress2.mp4'
  }
}

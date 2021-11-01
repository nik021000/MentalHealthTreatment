var questions;
var i=-1;
var index = 0;
var answers=[]
function hide(){
  $('#next').hide();
  $('#submit').hide();
  $('.options').hide();
}

function initialize(data){
  questions=data;
}

function submit(){
  save()
  return answers
}

function save(){
  if(document.getElementById('option-one').checked){
    answers[index]='option1'
    index+=1
  }
  else if(document.getElementById('option-two').checked)
  {
    answers[index]='option2'
    index+=1
  }
  else if(document.getElementById('option-three').checked)
  {
    answers[index]='option3'
    index+=1
  }
  else if(document.getElementById('option-four').checked)
  {
    answers[index]='option4'
    index+=1
  }
  i += 1;
  if(questions.length-1 == i){
    $('#next').hide();
    $('#submit').show();

  }
}

function show(){
  $('#next').show();
  save()
  console.log(questions)
  document.getElementById("option-one").checked = false;
  document.getElementById("option-two").checked = false;
  document.getElementById("option-three").checked = false;
  document.getElementById("option-four").checked = false;
    $('.question').html(questions[i]['question']);
    $('#start').hide();
    $('#question').html(questions[i]['question']);
    $('.options').show()
    $('#option1').html(questions[i]['option1']);
    $('#option2').html(questions[i]['option2']);
    $('#option3').html(questions[i]['option3']);
    $('#option4').html(questions[i]['option4']);
}

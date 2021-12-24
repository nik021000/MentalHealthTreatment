var questions;
var i=-1;
var index = 0;
var answers={'a':0,'d':0,'s':0};
var output = [];
function hide(){
  $('#next').hide();
  $('#submit').hide();
  $('.options').hide();
}
var flag=0;
function initialize(data){
  questions=data;
}

function submit(){
  var finalscore = 0;
  output.push(answers['a']+answers['d']+answers['s'])
  finalscore=answers['d']*2;
  console.log(finalscore)
  if(finalscore >= 0 && finalscore <= 9){
     output.push('Normal')
  }
  else if(finalscore >= 10 && finalscore <= 13){
    output.push('Mild')
  }
  else if(finalscore >= 14 && finalscore <= 20){
    output.push('Moderate')
  }
  else if(finalscore >= 21 && finalscore <= 27){
    output.push('Sever')
  }else{
    output.push('Extreamely Severe')
  }
  finalscore=answers['a']*2;
  if(finalscore >= 0 && finalscore <= 7){
     output.push('Normal')
  }
  else if(finalscore >= 8 && finalscore <= 9){
    output.push('Mild')
  }
  else if(finalscore >= 10 && finalscore <= 14){
    output.push('Moderate')
  }
  else if(finalscore >= 15 && finalscore <= 19){
    output.push('Severe')
  }else{
    output.push('Extreamely Severe')
  }
  finalscore=answers['s']*2;
  if(finalscore >= 0 && finalscore <= 14){
     output.push('Normal')
  }
  else if(finalscore >= 15 && finalscore <= 18){
    output.push('Mild')
  }
  else if(finalscore >= 19 && finalscore <= 25 ){
    output.push('Moderate')
  }
  else if(finalscore >= 26 && finalscore <= 33){
    output.push('Severe')
  }else{
    output.push('Extreamely Severe')
  }
  save()
  return output
}

function save(){
  if(flag != 0){
    var type=questions[i]['type'];
  }
  if(document.getElementById('option-one').checked){
    answers[type]+=0
    index+=1
  }
  else if(document.getElementById('option-two').checked)
  {
    answers[type]+=1
    index+=1
  }
  else if(document.getElementById('option-three').checked)
  {
    answers[type]+=2
    index+=1
  }
  else if(document.getElementById('option-four').checked)
  {
    answers[type]+=3
    index+=1
  }
  i += 1;
  if(questions.length-1 == i){
    $('#next').hide();
    $('#submit').show();

  }
  flag=1
}

function show(){
  $('#next').show();
  save();
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

function verify(){
  $('.error').html("Email Id and Password does not match")
}

function wrongemail(){
  $('.error').html('Wrong Email Id')
}

;

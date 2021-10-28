var data;
var i;
var flag = 0;

function start(){
  console.log("hello")
    i = 0
    data = $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/question'
    });

    //$('.question').html(data['responseJSON'][i]['question']);
}

function show(){
  $('.submit').html('Next');
    $('.question').html(data['responseJSON'][i]['question']);
    $('.options').show()
    $('.option').html(data['responseJSON'][i]['option1']);
    $('.option1').html(data['responseJSON'][i]['option2']);
    $('.option2').html(data['responseJSON'][i]['option3']);
    $('.option3').html(data['responseJSON'][i]['option4']);
    if(name_element = document.getElementById('option-1').checked){
      console.log(data['responseJSON'][i]['option1'])
    }
    else if(name_element = document.getElementById('option-2').checked)
    {
      console.log(data['responseJSON'][i]['option2'])
    }
    else if(name_element = document.getElementById('option-3').checked)
    {
      console.log(data['responseJSON'][i]['option3'])
    }
    else if(name_element = document.getElementById('option-4').checked)
    {
      console.log(data['responseJSON'][i]['option4'])
    }
    i += 1;
    if(data['responseJSON'].length == i){
      $('.submit').html('Submit');
    }
}

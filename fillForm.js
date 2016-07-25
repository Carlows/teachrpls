for(var index = 1; index <= 8; index++) {
  var selector = 'input[type="radio"][name="pregNo_'+ index +'_Resp"]'; 

  var random = Math.floor(Math.random()*5);
  $(selector).eq(random).attr('checked', 'checked');
}

$('form[name="form"][method="post"]').submit();

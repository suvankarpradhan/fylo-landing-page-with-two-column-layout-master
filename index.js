function getEmail1(){
    var email1 = $('#input1').val();
    var validEmail = checkEmail(email1);
    if(validEmail){
        $('#input1').css('border-color','hsl(0, 0%, 75%)');
        $('#errormsg1').css('visibility','hidden');
    }else{
        $('#input1').css('border-color','hsl(0, 69%, 67%)');
        $('#errormsg1').css('visibility','visible');
    }
}
function getEmail2(){
    var email2 = $('#input2').val();
    var validEmail = checkEmail(email2);
    if(validEmail){
        $('#input2').css('border','none');
        $('#errormsg2').css('visibility','hidden');
    }else{
        $('#input2').css('border','2px solid hsl(0, 69%, 67%)');
        $('#errormsg2').css('visibility','visible');
    }
}
function checkEmail(email)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(mailformat.test(email))
    {
        return true;
    }else{
        return false;
    }
}


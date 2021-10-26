
function calc(num){
    let result=document.getElementById("result");
    result.value+=num;
}
function eq(){
    let result=document.getElementById("result");
    result.value=eval(result.value)
}
function clearAll(){
    let result=document.getElementById("result");
    result.value=""
}
function oneCl(){
    let result=document.getElementById("result");
    result.value = result.value.substring(0, result.value.length - 1)
}
function sq(){
    let result=document.getElementById("result");
result.value=eval(result.value)*eval(result.value)
}
function key_detect_calc(evt)
{
       
      
     if(evt.keyCode==107)
        {
              calc('+');
        }
        else if(evt.keyCode==109)
        {
                calc('-');
        }
        else if(evt.keyCode==106)
        {
                calc('*');
        }
        else if(evt.keyCode==191)
        {
                calc('/');
        }
       
        else if(evt.keyCode==13)
        {
                eq();
        }
        else if(evt.keyCode==46)
        {
                clearAll();
        }
      
        return true;
}
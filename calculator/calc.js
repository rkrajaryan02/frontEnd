function add()
{
    num1=parseInt(document.getElementById("num1").value);
    num2=parseInt(document.getElementById("num2").value);
    document.getElementById("calc").value=`${num1+num2}`;

}
function sub(){
    num1=parseInt(document.getElementById("num1").value);
    num2=parseInt(document.getElementById("num2").value);
    document.getElementById("calc").value=`${num1-num2}`;

}
function mul(){
    num1=parseInt(document.getElementById("num1").value);
    num2=parseInt(document.getElementById("num2").value);
    document.getElementById("calc").value=`${num1*num2}`;
}
function div(){
    num1=parseInt(document.getElementById("num1").value);
    num2=parseInt(document.getElementById("num2").value);
    document.getElementById("calc").value=`${num1/num2}`;
}


var h1=document.getElementById("demo");
function addition()
{
    let num1= parseInt(document.getElementById("input1").value);
    let num2=parseInt(document.getElementById("input2").value);
    var result=num1+num2;
    document.getElementById("demo").innerHTML=result;

}
function substraction()
{
    let num1= parseInt(document.getElementById("input1").value);
    let num2=parseInt(document.getElementById("input2").value);
    var result=num1-num2;
    document.getElementById("demo").innerHTML=result;
    
}
function multiplication()
{
    let num1= parseInt(document.getElementById("input1").value);
    let num2=parseInt(document.getElementById("input2").value);
    var result=num1*num2;
    document.getElementById("demo").innerHTML=result;
    
}
function divide()
{
    let num1= parseInt(document.getElementById("input1").value);
    let num2=parseInt(document.getElementById("input2").value);
    var result=num1/num2;
    document.getElementById("demo").innerHTML=result;
    
}
function Display()
{
    let myinput=document.getElementById("myinput").value;
    document.getElementById("demo").innerHTML=myinput;
    console.log(myinput);
    alert(myinput);
}
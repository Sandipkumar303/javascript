let myPara=document.getElementById("demo");
console.log(myPara);

function display()
{
    myPara.innerHTML="This is comming from javascript";
    
}

function Styling()
{
    myPara.style.color="red";
    myPara.style.backgroundColor="green";
    myPara.style.border="5px dotted black";
    myPara.style.textAlign="center";
    myPara.style.textShadow="10px  pink";
    myPara.style.borderEndEndRadius="20px";
    myPara.style.fontSize="100px";
}

var input1=document.getElementById("myinput");
console.log(input1);


function change()
{
    input1.value ="Indore";
}
// using dom you can manuplate 3 things
//  innerHTML,css(style), attribute
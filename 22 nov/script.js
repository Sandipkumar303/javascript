


// query selector
let h1=document.querySelectorAll("h1");
console.log(h1);
h1[0].innerHTML="this is from queryselector";
h1[0].style.color="red";
h1[0].style.backgroundColor="pink";

h1[1].innerHTML="this is from queryselector";
h1[1].style.color="green";
h1[1].style.backgroundColor="red";

let button=document.getElementById("btn");


// whenever you pass a function as an argument to another function
// never use ()
// {
//     alert("")
// }
// fuction expression

// you can call regular functin before decleration but not
// arrow function and function expression
const display1 =function()
{
alert("function expression called");
};
button.addEventListener("click",display1);
button.addEventListener("mouseover", function()
{
    console.log("hello from  mousover  event");
});
// arrow function
const display2=()=>{
    alert("arrow function called");
}

const person={
    name : "John Doe",
    age :32,
    city : "London",
};

let text="";

for(let x in person)
{
    text+= person[x]+"<br>";
}
document.getElementById("demo").innerHTML=text;

const numbers=[102,25,39,40,57,69,77];
let text1="";
for(let i in numbers){
    text1+=numbers[i]+"<br>";
}

document.getElementById("demo1").innerHTML=text1;

let text3="";

const name="Javascript";
// for(let x of name)
// {
//     text3+=x+"<br>";
// }
// in for in loop variable will contain index of each persons
const persons=["sandip","harsh","rishabh","vishal","rohit"];

// in for of loop variable will contain value of each persons
for(let z of persons)
{
text3+=z+"<br>";
}
document.getElementById("demo2").innerHTML=text3;

const num1=[65,58,54,60];
let text4="";
for(let i in num1)
{
    text4+=num1[i]*10+"<br>";
}
document.getElementById("demo2").innerHTML=text4;
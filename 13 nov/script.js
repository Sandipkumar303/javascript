// 4 way to display output from javascript;


console.log('hello world!');
window.alert("hello world");
document.write("hello worl");

document.getElementById("demo").innerHTML="hello world";

// var , let , const ,
//  var has global scope and let and const has block or function scope

var age=24;

{
    var a=24;
    let b=25;
    const c=26;
}
console.log(a);
var globa1="john";
var globa2="dow";
const global3="harry";

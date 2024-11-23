//// var x= "hello";
// var y = "world";
// var z= x+ " " +y;
// var a=10;
// var b=20;
// let output;
// output = a+b;
// output = a-b;
// output = a*b;

// var a=a+b;
// a+=b;

//compare only values and === compares value and daya type
// var num1= 10;
// var num2= "10";
// if (num1===num2){
//     alert("Both are equal");
// }
// else{
//     alert("both are not equal");
// }
// ==compare values but does not check data type

//var . let can be reassigned
//const can be reassigned
// var global scope
//
//var can be redecleared but let and const cannot be redecleared

// {
// let name="John";
// name = "Aksahy";
// console.log(name);
// }

// var myname="Harray";
// var myname= "Poter";
// console.log(myname);

// const number //cannot be reasigned
// take 3 variables for your name age course and display in alert , console, innerHTML

var h1=document.getElementById("demo");
var myname="sandip rajput";
var age=25;
var course="FSD";
console.log(myname+ " "+age+" "+course);
// var h1=document.getElementById("demo");

h1.innerHTML=myname+ " "+age+" "+course;
// var myname="Priya Verma";
// var age=25;
// var course="FSD";
// console.log(myname+ " "+age+" "+course);

alert(myname);
//declear 5 variables for name, age, city, course and country
//declear 2 string variables and concat than into one variable
//declear 3 variable for firstname, lastname, hobby  and disply
//it in innerHTML in one line
//take user name and age from user and display
// h1.innerHTML=myname+ " "+age+" "+course;

// alert(myname);

//declear 5 variables for name, age, city, course and country and display in colsole==done
//declear 2 string variables and concat than into one variable and display in alert
//declear 3 variable for firstname, lastname, hobby  and disply  in innerHTML in one line
//take user name and age from user and display it in alert , console and innerHTML
//1-- hw
var name="sandip rajput";
var age=24;
var city="varanshi";
var course ="FSP";
var country="India";
console.log(name+" "+age+" "+city+" "+course+" "+country);
//2-- hw
var h1=document.getElementById("demo");
var firstname="sandip";
var lastname="rajput";
var hobby="plying vollybal";
h1.innerHTML=firstname+" "+lastname+" "+hobby;
//3-- hw
alert(firstname+" "+lastname);
//4-- hw
var username=prompt("Enter your username");
var userage=prompt("Enter your age");
alert(username+" "+userage);
console.log(username+userage);
// h1.innerHTML=username+" "+userage;

//padding , border , fontsize, height, apply
// h1.style.padding="5px";
// h1.style.border=" 5px solid black";
// h1.style.fontSize="50px";
// h1.style.height="80px";


// var btn=document.getElementById("btn");
// btn.style.width="150px";
// btn.style.height="50px";
// btn.innerHTML="Show";
// btn.style.borderRadius="8px";
// btn.style.fontFamily="Arial";
// btn.style.fontSize="20px";
// btn.style.backgroundColor="gray";
// btn.style.boxShadow="10px 20px 30px gray";
// var h1=document.getElementById("demo");
// h1.innerHTML=" Do You Work Everyday";

// var name="John Doe";
// var age=34;
// concatination
// console.log(name + " " + age);
// h1.innerHTML=name + " " + age;

// to get value from ser

// var userName= prompt("Enter Your Name");
// var userAge= prompt("Enter Your Age");

// h1.innerHTML=userNmae+ " "+ userAge;
//  var txtcolor=prompt(" Enter your color");
// h1.style.color=txtcolor;
// var bgcolor=prompt(" Enter your Bac kgraound color");
// h1.style.backgroundColor=bgcolor;

// get 

//  var  Myimage= document.getElementById("Myimage");
//  Myimage.src="1.img" ;
var h1=document.getElementById("demo");

var username=prompt("Enter your name");
var userage=prompt("Enter your age");
h1.innerHTML=username+ " "+userage;

var txtcolor=prompt("Enter your color");
var bgcolor=prompt("Enter your background color");
var border=prompt("Enter border color");
var redius=prompt("Enter border Radius");
var shadow=prompt("Enter text shadow");     
var fontSize=prompt("Enter font size");
var height=prompt("Enter height");
var textAlign=prompt("Enter your text align");

h1.style.color=txtcolor;
h1.style.backgroundColor=bgcolor;
h1.style.border=border;
h1.style.borderRadius=redius;
h1.style.textShadow=shadow;
h1.style.fontSize=fontSize;
h1.style.textAlign=textAlign;
let output =Math.PI;
output=Math.round(45.24232752);
// math.round rounds to the nearest whole number
output=Math.ceil(45.234);
// math.ceil rounds to the nearest higher whole number

output=Math.floor(35.677);
// math.floor rounds to the nearest  lower whole number

output.



let header ="Templates  Literals";
let tags =["Template String", "Javascript","es6"];
let text =`<h2>${header}</h2> <ul>`;

for(let x of tags)
{
    text+=`<li>${x}</li>`;
}

text+=`</ul>`;

document.getElementById("container").innerHTML=text;

// display(show)

// A Function passed as an argument to another function is called as
// a callback function

const numbers =[25,45,14,52];

numbers.forEach(calculate);

function calculate(y)
{
console.log(y*100);
}

// forEach method taks a callback function as an argument
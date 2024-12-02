//  var todayDate= new Date();
//  console.log(todayDate);


//  var tDay= todayDate.getDay();
//  console.log(tDay);

//  let day;


//  switch(tDay)
//  {
//     case 0:
//         day="sunday";
//         break;
//     case 1:
//         day="monday";
//         break;
//     case 2:
//         day="tuesday";
//         break;
//      case 3:
//         day="wednesday";
//         break;
//      case 4:
//         day="thrusday";
//         break;
//      case 5:
//         day="friday";
//         break;
//     case 6:
//         day="satrday";
//         break;
//  }
//  console.log(`Today is : ${day}`);
 
//  const person= {
//     firstName : "John",
//     lastName :"Doe",

//     display: function()
//     {
//  return `  this name ${this.firstName} ${this.lastName} is from display function`; 
//     },
//  };

//  console.log(person.firstName+ " "+ person.lastName);
//  console.log(person.display());

 const data={
name : "sandip singh",
city :" bhopal",
display :function()
{
   return ` ${this.name } ${this.city} `;
}
 };
 let h1=document.getElementById("demo");
 function data1()
 {
h1.innerHTML = data.display();
 }
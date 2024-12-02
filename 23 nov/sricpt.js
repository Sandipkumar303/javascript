
// document.getElementById("myForm").addEventListener("submit",validate);
// function validate(e)
// {
//     // to prevent the  default behavior of form submission
//     e.preventDefault();
//     let myname=document.getElementById("name").value ;
//     let myemail=document.getElementById("email").value ;
//     let password=document.getElementById("psw").value ;
//     let confirmpassword=document.getElementById("confpsw").value ;

//     console.log(myname,myemail,password,confirmpassword);
// // validating the form

//     if(myname==""||myemail==""||password==""||confirmpassword=="")

//         {
//             alert("all file are required");
//             return false;
//         }
        
//         if(password !==confirmpassword)
//             {
//                 alert("password does not match");
//                 return false;
//             }
//         alert("Form submitted sucsessfully");
        
// }
let h1=document.getElementById("demo");
 function display()
 {
    h1.innerHTML="sandip rajput";
    h1.style.color="red";
    h1.style.border="5px dotted blue";
    h1.style.textAlign="center";
    h1.style.borderRadius="10px";
    h1.style.background="pink";
 }
 let num1=document.getElementById("num1").value;
 let num2=document.getElementById("num1").value;
 function multiplication()
 {
let result=num1*num2;
h1.document.innerHTML=result;
return result;
 }
 function divission()
 {
let result=num1/num2;
return result;
 }
 let  width=prompt("enter width");
 let  height=prompt("enter height");
 function area()
 {
  let area=0.5*width*height;
   h1.document.innerHTML=area;
 }
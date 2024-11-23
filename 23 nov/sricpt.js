function validate()
{
    let myname=document.getElementById("name").value ;
    let myemail=document.getElementById("email").value ;
    let password=document.getElementById("psw").value ;
    let confirmpassword=document.getElementById("confpsw").value ;

    console.log(myname,myemail,password,confirmpassword);
// validating the form

    if(name==""||myemail==""||confirmpassword=="")

        {
            alert("all file are required");
            return false;
        }
}

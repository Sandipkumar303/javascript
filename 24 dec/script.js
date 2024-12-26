function fun()
{
    let head =document.getElementsByTagName(`h1`)
    head[0].classList.add(`head`)
}
function fun1()
{
    let head =document.getElementsByTagName(`h1`)
    head[0].classList.remove(`head`)
}
function fun2()
{
    let head =document.getElementsByTagName(`h1`)
    head[0].classList.toggle(`head`)
}


// setItem
// getItem
// removeIthem
// clear


localStorage.setItem("name"  ,"sandip")
localStorage.setItem(`age `, 24)
 let ag=localStorage.getItem(`age`)

 localStorage.removeItem(`name`)
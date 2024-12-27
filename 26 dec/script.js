








let data={
    nane:" sandip",
    age:24,
    address:`bhopla`
}


localStorage.setItem("userdata",  JSON.stringify(data))
let finaldata =JSON.parse(localStorage.getItem(`userdata`))
console.log(finaldata);
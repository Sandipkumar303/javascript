async function fet() {

    let table=document.querySelector(`#displaydata`)
    let res = await fetch("http://localhost:3000/emp")
    let data =await res.json()
    let finaldata=data.map((e)=>
        `
    <tr>
    <td>${e.id}</td>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.contact}</td>
    <td>${e.city}</td>
    <td> <button onclick="mydelete(`${e.id}`)">Delete</button></td>

    </tr>
    `

    ).join("")
    table.innerHTML=finaldata
}
fet()

function mydelete(id){
    console.log(id);

    fetch(`http://localhost:3000/emp/${id}`,{
        method:`DELETE`
    })
    .then(R=>alert("Deleted...!!!"))
}
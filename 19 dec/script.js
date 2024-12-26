const actors= [
    {name: "Shahrukh khaan" , location :"Mumbai"},
    {name: "Sanjay Dutt" , location :"Mumbai"},
    {name: "Brad Pitt" , location :"New YOrk"},
    {name: "TOnny Stark" , location :"Marvels"},
    
];

function display()
{
    let table=`
    <table  border="1px dotted"  width="600px"  bgcolor="lightred">
    
    <tr>

    <th>Name</th>
    <th>City</th>
    </tr>
        `;

        actors.map(function(y)
    {
        table +=`
        
        <tr>
<td>${y.name}</td>

<td>${y.location}</td>

        </tr>
        `    })


        table+=  `</table>`;
        document.getElementById("demo").innerHTML = table;
        
}

// map and foreach difference
// map returns a new array
// forEach doesnot retrn a new array just work on the elements
// filter

const numbers=[151,25,38,4265,501,65,7,845,90,105,11,12];

const filteredNum = numbers.filter(function(num)
{
    return num <50;
});

console.log(filteredNum);
console.log(numbers);

// Date  format

 let d= new Date();

//  months -0 -11 , days -0 -6
// year , month ,date ,hour ,minute ,second ,millisecond

d = new Date(2020 ,11,66,12,85,3000);
d = new Date(2020 ,11,66,12,85,3000);
// year ,month ,date ,hour,minute,second
d = new Date(2020 ,11,12,55,111);
// year ,month,date,hour ,minute
d = new Date(2020 ,11,7,46);
// year , month ,date
d = new Date(2020 ,11,22);



// date methods


 const today = new Date();
const year =today.getFullYear();
console.log(year);

const month =today.getMonth();
console.log(month);

const date = today.getDate();
console.log(date);

const day=today.getDay();
console.log(day);


console.log(d);
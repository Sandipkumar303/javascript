const fruits =["Apple","Orange","Grapes","Kiwi","Watermelon"];

// short method is shorts the items alphabetically

fruits.sort();
console.log(fruits);
// reverse method it rvers the items of an array

fruits.reverse();
console.log(fruits);

// compare function to short the items numerically
const numbers=[461,64,59,7,56,464,46];
numbers.sort(function(a,b)
{
    // return a-b; shorts in ascending order
});

console.log(numbers);
numbers.reverse();
console.log(numbers);

// to string - to convert an array to a string

// const newFruits=fruits.toString();
// console.log(newFruits,typeof newFruits);

// join method -to join the elements of an 
//array into a string with a separator

const joinedArray= fruits.join("*");
console.log(joinedArray);

const students=[
    {name:" sandip", course:"frontend" , city: "patna"},
    {name:" harsh", course:"backend" , city: "bhopal"},
    {name:" vikash", course:"fullstack" , city: "pune"},
    {name:" vishal", course:"python" , city: "delhi"},
    {name:" rohit", course:"react" , city: "varanshi"}
];


function display()
{
    let table=`
    <table  border="1px"  width="600px"  bgcolor="lightblue">
    
    <tr>

    <th>Name</th>
    <th>Course</th>
    <th>City</th>
    </tr>
        `;

        students.map(function(y)
    {
        table +=`
        
        <tr>
<td>${y.name}</td>
<td>${y.course}</td>
<td>${y.city}</td>

        </tr>
        `    })


        table+=  `</table>`;
        document.getElementById("demo").innerHTML = table;
        

}

// function printEvenNumbers()
// {
//     for(let i=1; i<=5; i++)
//         {
//             if(i%2!==0)
//             {
//                 console.log(i);
//             }
            
//         }
        
// }
// printEvenNumbers();
// function printOddNumbers()
// {
//     for(let i=1; i<=100; i++)
//         {
//             if(i%2===0)
//             {
//                 console.log(i);
//             }
            
//         }
        
// }
// printOddNumbers();


// // while loop
// let text="";
// let y=1;
// while(y<=10)
// {
//  text+= `the number is ${y} <br>`;
//  y++;
// }
// document.getElementById("demo").innerHTML=text;

// // do while loop

// let text1="";
// let z=1;
// do{
//     text1+=`the number is ${z}<br>`;
// console.log(z);
// z++;
// }
// while(z<=10);

// document.getElementById("demo").innerHTML= text1;


 function printPattern()
{
    let txt="";
    for(let i=1; i<=5; i++)
        for( let j=1; j<=5; j++)
    
    {
        {
           
            txt+=`*`;
        }
        txt+=`<br>`;
    }
    document.getElementById("demo").innerHTML=txt;
        
}

printPattern();

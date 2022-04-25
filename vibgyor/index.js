// let div=document.getElementById("rainbow");
// let colors = document.querySelectorAll("div");
// div.style.textAlign='center'
// div.style.fontWeight='bold'
// div.style.fontSize='2rem'
// div.style.padding='2rem'

// let colorr=["Violet","Indigo","Blue","Green","Yellow","Orange","Red"];

// for(let i=0;i<=colorr.length;i++)
// {
//     for(let j=i;j<=i;j++)
//     {
//         console.log(`${i}==${j}`)
//         colors[i].addEventListener("mouseover",aa)

//         function aa()
//         {
//             colors[i].style.backgroundColor=colorr[j];
//         }
//         colors[i].addEventListener("mouseout",bb)

//         function bb()
//         {
//             colors[i].style.backgroundColor="white";
//         }
//         }
// }

function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
 }

 const num = parseInt(prompt('Enter a positive integer: '));

 const result = sum(num);

 console.log(`The sum is ${result}`);



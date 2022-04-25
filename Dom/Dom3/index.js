// let add=()=>{
//     let inp1=document.getElementById('in1').value
//     let inp2=document.getElementById('in2').value
//     let sum=Number(inp1)+Number(inp2)
//     let h1=document.getElementById('h1')
//     h1.innerHTML=`Result:${sum}`
    
// }

// let sub=()=>{
//     let inp1=document.getElementById('in1').value
//     let inp2=document.getElementById('in2').value
//     let sum=Number(inp1)-Number(inp2)
//     let h1=document.getElementById('h1')
//     h1.innerHTML=`Result:${sum}`
    
// }

// let mul=()=>{
//     let inp1=document.getElementById('in1').value
//     let inp2=document.getElementById('in2').value
//     let sum=Number(inp1)* Number(inp2)
//     let h1=document.getElementById('h1')
//     h1.innerHTML=`Result:${sum}`
    
// }

// let div=()=>{
//     let inp1=document.getElementById('in1').value
//     let inp2=document.getElementById('in2').value
//     let sum=Number(inp1)/Number(inp2)
//     let h1=document.getElementById('h1')
//     h1.innerHTML=`Result:${sum}`
// }

// let change=()=>{
//     let art=document.getElementById('art')
//     let h2=document.createElement('h2')
//     h2.innerHTML='everyone'
//     art.replaceChild(h2, p)
//     body.append(art)
// }


// let color=['yellow','green','white']
// color.map((a,i)=>{
//     let ul=document.getElementById('ull')
//     ul.innerHTML+=`<li>${a}</li>`
// })


let color=[
    {cli:'red', fli:'apple', vli:'potato'},
    {cli:'blue', fli:'mango',vli:'tomato'},
    {cli:'green',fli:'banana',vli:'onion'}
]

let div1=document.getElementById('card')
div1.style.display='flex'

color.map((a)=>{
    let ul1=document.getElementById('ul1')
    ul1.innerHTML+= `<li>${a.cli}</li> `
    let ul2=document.getElementById('ul2')
    ul2.innerHTML+=`<li>${a.fli}</li>`
    let ul3=document.getElementById('ul3')
    ul3.innerHTML+=`<li>${a.vli}</li>`
})


let check=()=>{
    let pp=document.getElementsByTagName('p')
    alert(`Ther are ${pp.length} p tags`)
}




let idly=()=>{
    let bg=document.getElementById('idle')
    bg.style.backgroundImage="url('https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_960_720.jpg')"  
}
let burger=()=>{
    let bg=document.getElementById('idle')
    bg.style.backgroundImage="url('https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646__480.jpg')"  
}
let dosa=()=>{
    let bg=document.getElementById('idle')
    bg.style.backgroundImage="url('https://cdn.pixabay.com/photo/2022/01/27/07/34/manchurian-6971355_960_720.jpg')"  
}
let pizza=()=>{
    let bg=document.getElementById('idle')
    bg.style.backgroundImage="url('https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg')"  
}


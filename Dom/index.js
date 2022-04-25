let btn=()=>{
    //  document.body.style.backgroundColor='lightblue'
     let hh=document.getElementById('hh')
     hh.textContent="This is event Listener"
     
     let ul=document.createElement('ul')
     ul.style.backgroundColor='orange'
     ul.textContent='Animals:'
     let li1=document.createElement('li')
     let li2=document.createElement('li')
     let li3=document.createElement('li')
     
     ul.appendChild(li1)
     ul.appendChild(li2)
     ul.appendChild(li3)
     
     
     li1.textContent="Tigers"
     li2.textContent='Lions'
     li3.textContent='Elephants'

     document.body.append(ul)
     
}

let pan=()=>{

    let body=document.body
    // body.style.display='flex'
    body.style.alignItems='center'
    body.style.boxSizing='borderBox'

    let div=document.createElement('div')
    body.appendChild(div)
    div.className='mydiv'
    


    let h1=document.createElement('h1')
    div.appendChild(h1)
    h1.textContent='Government of India'
    h1.style.fontSize='3rem'
    h1.style.color='blue'
    h1.style.textShadow='5px 3px 2px black'
    h1.style.textAlign='center'

    let img=document.createElement('img')
    div.appendChild(img)
    img.src='photo3.jpg'
    img.style.width='120px'
    img.style.float='right'


    let h3=document.createElement('h3')
    div.appendChild(h3)
    h3.textContent='RITHEESH GOWDA K S'
    h3.style.fontFamily='SanSarif'

    let h4=document.createElement('h4')
    div.appendChild(h4)
    h4.textContent='CMPRUQ7854'
    h4.style.fontWeight='bold'
    
    
}



// let m=document.getElementById('abc')
// m.onclick=()=>{
//     let body=document.body
//     let input1=document.getElementById('n1').value
//     let input2=document.getElementById('n2').value

//     let sum=Number(input1)+Number(input2)
//     let h1=document.getElementById('h1')
//     h1.innerHTML=`The result is ${sum}`
// }

let change=()=>{
    
    let select=document.getElementById('city').value
    document.getElementById('res').innerHTML=`your city is ${select}`
    let pic1=document.getElementById('pic').value
    select.appendChild(pic1)
    pic1.src='https://cdn.pixabay.com/photo/2014/03/22/17/23/suvarna-vidhana-soudha-292736_960_720.jpg'
    
    
}

let bgc=()=>{
    // body=document.body
    let select=document.getElementById('color').value
    document.body.style.backgroundColor=select
}

let mice=()=>{
    let  mm=document.getElementById('mhover')
    document.getElementById('mhover').style.color='red'
}

let mice1=()=>{
    let  mm=document.getElementById('mhover')
    document.getElementById('mhover').style.color='black'
}
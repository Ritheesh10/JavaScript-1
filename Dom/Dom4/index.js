let d=document.getElementById('btn')
d.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('parent clicked')
    console.log(e.target)
    console.log(e.eventPhase)
},true)

let d1=document.getElementById('child1')
d1.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('child 1 is clicked')
    console.log(e.eventPhase)
},true)

let d2=document.getElementById('child2')
d2.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('child 2 is clicked')
    console.log(e.eventPhase)
},true)
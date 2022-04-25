let TripData=[
    {
        img:"https://cdn.pixabay.com/photo/2021/08/18/16/52/buildings-6556065_960_720.jpg",
        title:'NYC',
        desription:'USA',
        color:'gray'
    },
    {
        img:"https://cdn.pixabay.com/photo/2020/05/24/06/54/dumbo-5212670_960_720.jpg",
        title:'Brooklyn',
        desription:'USA',
        color:'lightblue'
    },
    {
        img:"https://cdn.pixabay.com/photo/2020/05/05/05/09/nbc-5131447_960_720.jpg",
        title:'Manhattan',
        desription:'USA',
        color:'lightgreen'
    }
]

let tripContent=document.getElementById('tripcontainer')
let output=[]
TripData.forEach((t,i)=>{
    output+=
    `<div id='tripcontainer' style='background:${t.color};margin:1rem;' class="dd">
        <figure>
            <img src=${t.img} alt=${t.title} width='320px' />
        
        <caption><h1>${t.title}</h1></caption>
        <caption><p>${t.desription}</p></caption>
        </figure>
    </div>`
})


tripContent.innerHTML=output;

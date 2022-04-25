let inp1=document.getElementById("inp1")
let inp2=document.getElementById("inp2")

function add(){
    let tb1=document.getElementById("tab")
    
    tb1.innerHTML+=`<tr> <td>${inp1.value}</td>   <td>${inp2.value}</td> <td><button onclick='delrow()'>Delete</button></td></tr>`
    
}


// function remove(){
//     let tb1=document.getElementById("tab")
    
//     tb1.removeChild(tb1.lastElementChild)
  
// }

let delrow=()=>{
    let tb2=document.getElementById("tab")
   tb2.
}
let sub=()=>{
    let in1=document.getElementById('in1').value
    let in2=document.getElementById('in2').value
    let tab=document.getElementById('tab')

    tab.innerHTML+=
                      `<tr>
                          <td>${in1}</td>
                          <td>${in2}</td>
                      </tr>`
}

let remove=()=>{
    let in1=document.getElementById('in1').value
    let in2=document.getElementById('in2').value
    let tab=document.getElementById('tab')
    tab.removeChild(tab.lastChild)

    

}
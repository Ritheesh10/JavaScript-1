let body=document.body
document.body.style.backgroundColor='lightblue'

let sec=document.createElement('section')
body.appendChild(sec)
// sec.style.display='flex'
sec.style.margin='auto'
sec.style.alignItems='center'
sec.style.justifyContent='center'

let h=document.createElement('h1')
sec.appendChild(h)
h.style.textAlign='center'
h.style.fontSize='2rem'
h.textContent='Registration Form'

let div1=document.createElement('div')
sec.appendChild(div1)
div1.style.backgroundColor='gray'
div1.style.display='flex'
div1.style.alignItems='center'
div1.style.justifyContent='center'
div1.style.flexDirection='column'
div1.style.margin='2rem 23rem'
div1.style.padding='3rem 0rem'


let input1=document.createElement('input')
div1.appendChild(input1)

input1.onmouseover=()=>{
    input1.className="inp"
}
input1.onmouseout=()=>{
    input1.className='default'
}
input1.style.width='23rem'
input1.style.padding='1rem 1rem'
input1.style.margin='1rem 0rem'
input1.style.textAlign='center'
input1.placeholder='Enter Your Name'


let input2=document.createElement('input')
div1.appendChild(input2)
input2.style.width='23rem'
input2.style.textAlign='center'
input2.style.padding='1rem 1rem'
input2.style.margin='1rem 0rem'
input2.placeholder='Enter Email'


let input3=document.createElement('input')
div1.appendChild(input3)
input3.style.width='23rem'
input3.style.textAlign='center'
input3.style.padding='1rem 1rem'
input3.style.margin='1rem 0rem'
input3.placeholder='Enter Phone Number'

let btn=document.createElement('button')
div1.appendChild(btn)
btn.style.padding='0.5rem 9.5rem'
btn.style.margin='1rem 0rem'
btn.textContent='SUBMIT'
btn.style.backgroundColor='lightgreen'
btn.style.border='2px solid lightgreen'
btn.style.fontWeight='700'
btn.style.fontSize='1.5rem'



// let olele=document.createElement('ol')
// olele.style.color='Red'
// let li1=document.createElement('li')
// let li2=document.createElement('li')
// let li3=document.createElement('li')
// li1.textContent='Apple'
// li2.textContent='Mango'
// li3.textContent='Grapes'
// olele.appendChild(li1)
// olele.appendChild(li2)
// olele.appendChild(li3)
// document.body.append(olele)


// let tab=document.createElement('table')
// tab.style.color='blue'
// tab.style.border="2px solid black"
// let tr1=document.createElement('tr')
// let th1=document.createElement('th')
// let th2=document.createElement('th')
// let th3=document.createElement('th')
// tr1.appendChild(th1)
// tr1.appendChild(th2)
// tr1.appendChild(th3)
// tab.appendChild(tr1)
// th1.textContent='Name'
// th2.textContent='Role'
// th3.textContent='Company'


// let tr2=document.createElement('tr')
// let td1=document.createElement('td')
// let td2=document.createElement('td')
// let td3=document.createElement('td')
// tr2.appendChild(td1)
// tr2.appendChild(td2)
// tr2.appendChild(td3)
// tab.appendChild(tr2)
// td1.textContent='X'
// td2.textContent='Y'
// td3.textContent='Z'

// let tr3=document.createElement('tr')
// let td4=document.createElement('td')
// let td5=document.createElement('td')
// let td6=document.createElement('td')
// tr3.appendChild(td4)
// tr3.appendChild(td5)
// tr3.appendChild(td6)
// tab.appendChild(tr3)
// td4.textContent='A'
// td5.textContent='B'
// td6.textContent='C'


// let tr4=document.createElement('tr')
// let td7=document.createElement('td')
// let td8=document.createElement('td')
// let td9=document.createElement('td')
// tr4.appendChild(td7)
// tr4.appendChild(td8)
// tr4.appendChild(td9)
// tab.appendChild(tr4)
// td7.textContent='L'
// td8.textContent='M'
// td9.textContent='P'


// document.body.append(tab)

let ul=document.createElement('ul')
let h2=document.createElement('h2')
let li1=document.createElement('li')
let ul1=document.createElement('ul')
let li4=document.createElement('li')
let li5=document.createElement('li')
let li2=document.createElement('li')
let li3=document.createElement('li')
ul.appendChild(h2)
ul.appendChild(li1)
li1.appendChild(ul1)
ul1.appendChild(li4)
ul1.appendChild(li5)
ul.appendChild(li2)
ul.appendChild(li3)
h2.textContent='City Names'
li1.textContent='Bengaluru'
li2.textContent='Mysore'
li3.textContent='Hubli'
li4.textContent="btm"
li5.textContent="HSR"
h2.style.textDecoration='underline'
document.body.append(ul)
let body=document.body
body.style.margin='0'
body.style.padding='0'
body.style.boxSizing='boder-box'

let sec=document.createElement('section')
sec.style.backgroundColor='yellow'
sec.style.width='100vw'
sec.style.height='100vh'
sec.style.margin='0'
sec.style.padding='0'

let art=document.createElement('article')
sec.appendChild(art)
art.style.backgroundColor='lightblue'
art.style.display='flex'
art.style.alignItems='center'
art.style.justifyContent='center'
// art.style.textAlign='center'
art.style.padding='6rem'
art.style.margin='0rem'

// div1

let div1=document.createElement('div')
art.appendChild(div1)
// div1.style.border='2px solid black'
div1.style.borderRadius='10px'
div1.style.padding='2rem'
// div1.style.width='300px'
div1.style.backgroundColor='darkgray'
div1.style.boxShadow='3px 3px 12px 4px black'
// div1.style.transform='scale(1.09)'

let img1=document.createElement('img')
div1.appendChild(img1)
img1.src='photo1.jpg'
img1.style.width='250px'
// img1.style.height='200px'

let cap=document.createElement('caption')
div1.appendChild(cap)
cap.textContent='ImageOne'
cap.style.fontSize='2rem'
cap.style.fontWeight='700'

let p=document.createElement('p')
div1.appendChild(p)
p.textContent='Loremipsumdolorsitametconsecteturadipisicing elitExplicabositfaceremaioresaut,obcaecatinostr umreprehenderithicquosharumremveniamquia, untquisquamteneturdistinctioquidemasuntalias.'

// div2

let div2=document.createElement('div')
art.appendChild(div2)
div2.style.border='2px solid black'
div2.style.padding='2rem'
div2.style.marginLeft='2rem'
div2.style.marginRight='2rem'
// div2.style.width='300px'
div2.style.backgroundColor='darkgray'

let img2=document.createElement('img')
div2.appendChild(img2)
img2.src='photo2.jpg'
img2.style.width='250px'
// img1.style.height='200px'

let cap1=document.createElement('caption')
div2.appendChild(cap1)
cap1.textContent='ImageSecond'
cap1.style.fontSize='2rem'
cap1.style.fontWeight='700'

let p1=document.createElement('p')
div2.appendChild(p1)
p1.textContent='Loremipsumdolorsitametconsecteturadipisicing elitExplicabositfaceremaioresaut,obcaecatinostr umreprehenderithicquosharumremveniamquia, untquisquamteneturdistinctioquidemasuntalias.'

// div3

// let div3=document.createElement('div')
// art.appendChild(div3)
// // div3.style.border='2px solid black'

// // div3.style.width='300px'
// // div3.style.backgroundColor='darkgray'
// div3.style.boxShadow='-3px -3px 12px 4px blue'

let img3=document.createElement('img')
art.appendChild(img3)
img3.src='photo3.jpg'
img3.style.width='24rem'
img3.style.height='23rem'
img3.style.boxShadow='-3px -3px 12px 4px blue'


// let cap2=document.createElement('caption')
// div3.appendChild(cap2)
// cap2.textContent='ImageThree'
// cap2.style.fontSize='2rem'
// cap2.style.fontWeight='700'
// // cap2.style.color='white'

// let p2=document.createElement('p')
// div3.appendChild(p2)
// p2.textContent='Loremipsumdolorsitametconsecteturadipisicing elitExplicabositfaceremaioresaut,obcaecatinostr umreprehenderithicquosharumremveniamquia, untquisquamteneturdistinctioquidemasuntalias.'


document.body.append(sec)
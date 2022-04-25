// let a='Hello world'
// console.log(a.concat(" ","welcome"))
// console.log(a.replace("world", 'Ritheesh'))
// console.log(a.concat(" ","welcome"))
// let fruits='apple, banana kiwi'
// console.log(fruits.substr(7,9))
// console.log(fruits.trim())
// console.log(fruits.split(' ')[1].split(' '))


// let company='Testyantra software solutions'
// let add='india ltd'
// console.log(company.concat(' ','India ltd'))
// console.log(company.toUpperCase())
// console.log(company.replace('solutions', 'company'))
// console.log(company.split(' ')[0])

// let s=prompt("enter sentence")
// console.log(s)
// console.log(s.split(' ')[1])
// console.log(s.toUpperCase().split("").reverse().join(""))
// console.log(s.toUpperCase().split(" ").reverse().join('#'))

// let str="ritheesh is in test yantra"
// console.log(str.split(" ").reverse().join(" "))
// let str1=''
// let count=1
// let index=0
// for(let i=str.length-1;i>=0;i--)
// {
//  if (str.charAt(i)!=' '&& str.charAt(i-1)==' ' && count <=2) {
//      count++
//      index=i
//  }
    
    
// }
// str1+=str.slice(0,(index))
// for(let i=index;i<str.length;i++)
// {
//     str1+=str.charAt(i).toUpperCase()
// }
// console.log(str1)

// let arr=[5,4,9,1,7,6]

// // console.log(arr.filter((a)=>a%2==0))
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i]+arr[j]==10 && i!=j) {
//             console.log(arr[i],arr[j])
//         }
//     }
    
// }

// let arr=['1234','abort6', 'the20','mission30','fff5','all20']

// for (a of arr) {
//     let alpha=0
//     let digit=0
//     for (let i = 0; i < arr.length; i++) {
//                if (a.charCodeAt(i) >= 48 && a.charCodeAt(i) <= 57) 
//                    digit++
//                 else if(a.charCodeAt(i)>=65 && a.charCodeAt(i)<=90)
//                    alpha++
//                 else if(a.charCodeAt(i)>=97 && a.charCodeAt(i)<=122)
//                    alpha++
//     }
//     if (digit!=0 && alpha!=0) 
//         console.log(a)
    
// }


// let str="hello"
//  str=str.split('')
// console.log(str)
// let str1=new Set(str)
// console.log(str1)

// for (let i of str1) {
//    let count=0;
//    for (let j of str) {
//       if(i==j) count++;
//    }
//    if(count==1)
//    console.log(i+" "+count)
// }

// let arr=[10,5,7,8,9,11,12,14,17]
// let div2and5=[]
// let even=[]
// let odd=[]
// for ( a of arr) {
//    if (a%2==0 && a%5==0) 
//       div2and5.push(a)
   
//    if (a%2==0)  even.push(a)
//     else odd.push(a)
   
// }
// div2and5.sort((a,b)=>a-b)
// even.sort((a,b)=>a-b)
// odd.sort((a,b)=>b-a)
// arr=[]
// for ( a of div2and5) {
//    arr.push(a)
// }
// for ( a of even) {
//    arr.push(a)
// }

// for ( a of odd) {
//    arr.push(a)
// }

// console.log(arr)

// let employee=[{
//    empname:'Arnold schewazzenegar',
//    empsal:25000
// },{
//    empname:'Borris Jhonson',
//    empsal:35000
// },{
//    empname:'Christian Bale',
//    empsal:45000
// },{
//    empname:'David Fincher',
//    empsal:15000
// }]

// function hemp(empname,empsal) {
//    this.empname=empname
//    this.empsal=empsal
// }

// let arre=[]
// arre.push(new hemp('arnold', 12000))
// arre.push(new hemp('christian', 30000))
// arre.push(new hemp('david',10000))

// arre.sort((a,b)=>a.empsal - b.empsal)
// console.log(arre)

function emp(ename,city) {
   this.ename=ename
   this.city=city
}
let emplist=[]
let city1=[]
emplist.push(new emp('arnold','Bengaluru'))
emplist.push(new emp('bale','Hyderabad'))
emplist.push(new emp('christ','Bengaluru'))
emplist.push(new emp('david','Chennai'))
emplist.push(new emp('fincher','Hyderabad'))
for ( a of emplist) {
   city1.push(a.city)
}
 city1=new Set(city1)
for ( c of city1) {
   let count=0
   for ( a of emplist) {
      if (a.city==c) 
      count++   
   }
   console.log(c+"==="+count);
}





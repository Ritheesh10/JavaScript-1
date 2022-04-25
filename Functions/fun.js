// // // function demo(...a,b) {
// // //     console.log(a)
// // //     console.log(b)
    
// // // }
// // // demo(1,2,3,4,5,6)

// // let students={
// //     sname:'ritheesh',
// //     id:345,
// //     city:'blore',
// //     pin:560021
// // }

// // let {sname,...r}=students
// // console.log(sname)
// // console.log(r)

// // let arr=[1,2,3,4,5]
// // let c=arr;
// // let [...p]=arr;
// // console.log(arr)
// // console.log(c)
// // console.log(p)
// // console.log(arr===c)
// // console.log(arr===p)

// // let a=[10,20,30]
// // console.log(Math.max(...a))
// // console.log(Math.max(a[0],a[1],a[2]))
// // console.log(Math.max(a))

// // function demo1(sid,sname,sal) {
// //     this.sid=sid;
// //     this.sname=sname;
// //     this.sal=Number(sal)
// // }

// // let s1=new demo1(100, 'ritheesh','222')
// // console.log(s1)
// // // console.log(first)

// // function book(bname,bprice,bauthor) {
// //     bname=bname
// //     this.bprice=bprice
// //     this.bauthor=bauthor

// // }

// // let b1=new book('biography', 999, 'shakesphere')
// // console.log(b1)

// //  function employee(ename,desig,sal,ispermanent)
// // {
// //        this.ename=ename
// //        this.desig=desig
// //        this.sal=Number(sal)
// //        this.ispermanent=Boolean(ispermanent)
// // }

// // let e1=new employee('ritheesh', 'developer', '30000rs', 0)
// // console.log(e1)

// let address={
//        city:'blore',
//        area:'btm'
// }

// function employee(ename,eid,salary,address) {
//        this.ename=ename
//        this.eid=eid
//        this.salary=salary
//        this.address=address
//    }

  

//    let e1=new employee('smith', 123 ,30000, address)
//    let e2=JSON.parse(JSON.stringify(e1))
//    let e3=new employee('james', 987, 25000, address)

//    console.log(e2)
//    console.log(e1 == e2)
//    console.log(e1.address == e2.address)


// let arr=[10,22,30,45,50,65,70]

// let arr2=[]
// // console.log(arr2)

// for (let i = 0; i < arr.length; i++) {
//        if ((arr[i]%2==0)&&(arr[i]%5==0)) {
//               arr2.push(arr[i])
//        }
       
// }
// console.log(arr2)

// let a1=[1,2,3,4]
// let a2=[5,6,7,8,9]

// let a3=[]
// for (let i = 0;( i <a1.length)||(i<a2.length); i++) {
//        if (a1[i]) 
//             a3.push(a1[i])  
//        if (a2[i])
//        a3.push(a2[i])       
// }
// console.log(a3)

// let length1=a1.length>a2.length?a1.length:a2.length

// for (let i = 0; i <length1; i++) {
//        if (i<a1.length) a3.push(a1[i])
//        if(i<a2.length) a3.push(a2[i])
// }
// console.log(a3)


// let arr1=[1,2,3,4]
// let arr2=[3,2]
// for (let i=0;i<arr2.length;i++) {
//        for (let j=0;j<arr1.length;j++) {
//               if (arr2[i]==arr1[j]) {
//                      arr1.splice(j,1)
                     
//               }
//        }
      
// }
// console.log(arr1)


let n=5
let count=0
for (let num = 2; count<=n; num++) {
let flag=false;
for(let i=2;i<num;i++)
{
    if (num%i==0) {
        flag=true
        break;
    }
    if(flag==false)
        count++
    if (count==n) 
        console.log(num)
    
}
    
}

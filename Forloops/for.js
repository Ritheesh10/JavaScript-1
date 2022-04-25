// // var a=10
// // let b=100
// // function test(x) {
// //     var a=20
// //     b=200
// //     console.log(a)
// //     console.log(b)
// //     console.log(this.a)
// //     console.log(window.a)
// //     console.log(window.b)
// //     function demo() {
// //         var a=30
// //         b=300
// //         console.log(a)
// //         console.log(b)
// //         console.log(this.a)
// //         console.log(this.b)
// //     }
// //     demo()
// //     console.log(x)
// //     console.log('test ends')
// // }
// // test('hello')

// // console.log('start')
// // let a='hi'
// // var b=100
// // b=200
// // function test() {
// //     console.log(a)
// //         a='hello'
// //     console.log(a)
// //     console.log(this.a)
// //     var b='bye'
// //     console.log(b)
// //     console.log(this.b)
// // }
// // test()
// // console.log(a)
// // console.log(b)
// // console.log('end')

// console.log('start')
// let x=700
// x=500
// let y=200
// function test() {
//     console.log(x)
//     let z='hi'
//     z='hello'
//     console.log(z)
//     console.log(this.x)
//     var y=220
//     console.log(y)
//     console.log(this.y)
//     var m=90
// }
// test()
// // console.log(z)
// // console.log(m)
// console.log('end')


// let obj={
//     ename:'ritheesh',
//     eid:1234,
//     esal:30000,
// }
// console.log(Object.freeze(obj))
// obj.edesgn='dev'
// console.log(obj)
// console.log(Object.isFrozen(obj))


///prime numbers



// let num=Number(prompt('enter number'))
// let count=0;
// for (let i = 2; i <=num -1; i++) {
//    if (num%i==0) {
//        count++
//    }
    
// }
// if (count==0) {
//     console.log('prime')
// } else {
//     console.log('not prime')
// }


// for(let num=10;num<=30;num++){
// let count=0
// for (let i = 2; i <num-1; i++) {
//    if (num%i==0) {
//        count++;
//    }
//     if (count==0) {
//         console.log(num)
//     }
// }
// }

// for(let num=40;num<=50;num++){
//    res(num)
//    function res(num) {
//     let count=0
//     for (let i = 2; i <num-1; i++) {
//        if (num%i==0) {
//            count++;
//        }
//    }
//         if (count==0) {
//             console.log(num)
//         }
//     }
//     }

// let num=Number(prompt('enter th number'))
// let sum=0
// for (let i = 1; i <num; i++) {
//    if (num%i==0) {
//        sum+=i
//    }
// }
//     if (sum==num) {
//         console.log(`${num} is perfect number`)
//     }else console.log(`${num} is not`)


    // for(let num=1;num<=1000;num++){
    //     let sum=0;
    //     for (let i = 1; i<num; i++) {
    //         if (num%i==0) {
    //             sum+=i
    //         }
    //      }
    // if (sum==num) console.log(`${num} is perfect number`)
    // }

let num=145; let temp=num;
let sum=0;
while (num>0) {
let digit=num %10;
sum+=fact(digit) 
    num=Math.trunc(num/10)
}
if (sum==temp) 
    console.log('strong number')
 else 
    console.log('not strong number')


function fact(num) {
    let fact1=1;
    for(let i=1;i<=num;i++)
    {
        fact1*=i
    }
    return fact1;
}



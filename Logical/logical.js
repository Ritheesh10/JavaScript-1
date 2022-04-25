// let a=40;
// let b=20;
// let c=30;

// let res=(a>b)&&(a>c)?a:(b>a)&&(b>c)?b:(c>a)&&(c>b)?c:'no';
// let res1=(a>b)&&(a>c)?a:(b>c)?b:c;
// console.log(res)
// console.log(res1)

// let year=2020;
// let leapyear=((year%400==0)||(year%4==0)&&(year%100!=0))?"its leap year":'not leap year'
// console.log(leapyear)

// let x=55;
// let y=18;
// let z=7;
// let even=((x>y)&&(x>z)?x:(y>z)?y:z)%2==0?"largest is even":"not even largest"
// console.log(even)


// let num=22
// if (num%2==0) {
//     console.log(num +" is even")
// } else {
//     console.log(num +" is odd")
// }


// let marks=100;
// if ((marks>=80)&&(marks<=100)) {
//     console.log('first class')
// } else if ((marks>=70)&&(marks<80)) {
//     console.log('second class')
// }
// else if ((marks>=50)&&(marks<70)){
//     console.log('third class')
// }
// else if (marks<50){
//     console.log('fail')
// }
// else{
//     console.log('not valid')
// }

// let temp=110;
// if((temp>=38)&&(temp<=100)){
//     console.log('fever')
// }
// else if((temp<38)&&(temp>10)){
//     console.log('normal')
// }
// else if((temp>100)&&(temp<=120)){
//     console.log('corona')
// }
// else{
//     console.log('not valid')
// }

// let a=1000000
// let b=20000
// let c=152
// let d=52200000

// if((a>b)&&(a>c)&&(a>d)){
//     console.log('a is big')
// }
// else if((b>c)&&(b>d)){
//     console.log('b is big')
// }
// else if(c>d){
//     console.log('c is big')
// }
// else {
//     console.log('d is big')
// }

// let a=prompt('enter item')
// switch (a) {
//     case 'idly':
//         console.log('idly is coming')
//         break;

//     case 'dosa':
//         console.log('dosa is coming')
//     break;
//     case 'vada':
//         console.log('vada is coming')
//     break;
//     case 'puri':
//         console.log('puri is coming')
//     break;
//     default:
//         console.log('wrong')
//         break;
// }

// let b=prompt('enter marks')
// switch (true) {
//     case (b>=80) &&( b <=100):
//         console.log('first class')
//         break;
//     case b<80 && b>=70:
//             console.log('second class')
//             break;
//     case b<70 && b>=50:
//         console.log('third class')
//         break;
//     case b<50 :
//         console.log('fail')
//         break;
//     default:
//         console.log('not valid')
//         break;
// }

// let day=prompt("enter day")
// switch (day) {
//     case 'mon':
//         console.log('play cricket')
//         break;
//     case 'tue':
//         console.log('play football')
//         break;
//     case 'wed':
//         console.log('play kabbadi')
//         break; 
//     case 'thu':
//         console.log('play hockey')
//         break;
//     case 'fri':
//         console.log('play cricket')
//         break;
//     case 'sat':
//         console.log('play hockey')
//         break;    
//     default:
//         console.log('not valid')
//         break;
// }

// factorial of numbers

// let numm=5
// let fact=1
// for (let i=1; i<=numm; i++) {
//     fact=fact*i;
// }
// console.log(fact)

// sum of 20 even natural numbers

// let neven=Number(prompt('enter number of even count'))

// let sum=0
// let n=1
// for (let count=1; count<=neven; n++) {
//     if (n%2==0) {
//         sum=sum+n
//         count++
//     }
    
// }
// console.log(sum)

// sum of even numbers and sum of odd numbers

// let start1=Number(prompt('enter the start value'))
// let end2=Number(prompt('enter the end value'))
// let even=0; let odd=0;
// for (let num = start1; num <= end2; num++) {
//      if (num%2==0) 
//          even+=num
//      else 
//          odd+=num
// }
// console.log(even)
// console.log(odd)



// let factor=Number(prompt('enter number'))
// let ff=1;
// for (let a=1; a<=factor; a++) {
//     ff=ff*a
// }
// console.log(ff)

let start=Number(prompt('enter first num'))
let end=Number(prompt('enter last num'))

for (let b = start; b <=end; b++) {
    let factt=1;
    for (let c = 1; c <=b; c++) {
        
        factt=factt*c
    }
    if(b%2==0)console.log(`factorial of ${b} is ${factt}`)
}



// let num=Number(prompt('enter number'))
// for (let i = 0; i <=num; i++) {
//     if (num%i==0) {
//         console.log(i)
        
//     }
    
// }


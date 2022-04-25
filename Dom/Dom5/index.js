// // let a=prompt('Enter value')
// // let sum=a.split('')
// // sum.splice(1,0," ")
// // sum.splice(4,0," ")
// // sum.splice(6,0," ")
// // console.log(sum.join(''))

// let str='javascript'
// let str1='scripty language'
// //  str=str.split('')
// //  str1=str1.split('')

// for (let i = 0; i <=str.length; i++) {
//     for(let j=0;j<=str1.length;j++){
//         if (str[i]===str1[j]) {
//             console.log(`same are ${str[i]}`)
//             break;
//         }
        
//     }
    
// }

// let s1='kumar'
// let s2='selva'
// console.log(s1.substring(1,3))
// console.log(s1.substr(1,3))


// let ss=[1,2,3,4,5]
// console.log(ss.splice(2,4,'hi'))
// console.log(ss)

let str='ritheesh'
console.log(str.charAt(2))
let newarr=str.split('')
let remove=()=>{
    
    let dup=newarr.filter((e)=>{
        return newarr.indexOf(e)!==newarr.lastIndexOf(e)
    })
    return dup.join('')
}
console.log(remove(str))


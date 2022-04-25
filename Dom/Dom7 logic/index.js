// function alphabet_Soup(str) {
//     return str.split("").sort().join("");
//   }
  
//   console.log(alphabet_Soup("python"));
  
//   console.log(alphabet_Soup("exercises"));

function order() {
    let a='python'
    return a.split('').sort().join('')
    
}
console.log(order())

let b=[4,1,5,3,6,2]
console.log(b.sort((a,b)=>(a-b)))

function char(str) {
    var length=0;
    while (str[length]) {
        length++;
        
    }
    console.log(length);
}

char('ritheesh')

///
let c=30
let f=c*1.8+32
console.log(f)

var arr=[20,10,54,23,78,45]
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr)

let se='ritheesh'
console.log(se.length)
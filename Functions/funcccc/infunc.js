console.log('start')
var a=10
let b=50
console.log(a)
function x() {
       // console.log(p)
       let p
       p='hello'
       function y() {
              var c=100
              console.log(c)
              console.log(this.b)
              console.log(this.a)
              console.log(p)
       }y()
}x()
console.log('end')
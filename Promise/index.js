let promise1 = new Promise((resolve, reject) => {
   setTimeout(()=> resolve('Im promise 1 block'),3000)
})

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Im promise 2 block"),2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Im promise 3 block"),1000);
});

Promise.all([promise1, promise2, promise3])
  .then(r => console.log(r))
    .catch(e => console.log(e));
  Promise.any([promise1, promise2, promise3])
    .then(r => console.log(r))
    .catch(e => console.log(e));
Promise.race([promise1,promise2,promise3]).then(r=>console.log(r)).catch(e=>console.log(e))
Promise.allSettled([promise1, promise2, promise3])
  .then(r => console.log(r))
  .catch(e => console.log(e));

let promises1 = new Promise((resolve, reject) => {
    let prog=true
    let comp=true
    if (prog==true && comp==true) {
        resolve('go for lunch')
    }
    else reject('not go for lunch')
})

let promises2 = new Promise((resolve, reject) => {
  let prog = true;
  let comp = true;
  if (prog == true && comp == true) {
    resolve("and come back");
  }
  else reject('not come back')
});

let promises3 = new Promise((resolve, reject) => {
  let prog = true;
  let comp = false;
  if (prog == true && comp == true) {
    resolve("no lunch");
  }
  else reject('not lunch')
});

// console.log(Promise);
// Promise.all([promises1,promises2,promises3]).then(f=>console.log(f)).catch(e=>console.log(e))
// Promise.any([promises1, promises2, promises3])
//   .then(f => console.log(f))
//   .catch(e => console.log(e));

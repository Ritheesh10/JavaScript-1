 async function fetch() {
    try {
        let data = await window.fetch("https://api.github.com/users");
    let fdata = await data.json()
    console.log(fdata);
   }
catch(error){
    console.log(error)
}
    
}

fetch()
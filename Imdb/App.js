let sbtn = document.getElementById("sbutt");

async function fetching() {
    console.log("working");
    document.getElementById("final").innerHTML=''
    let sbox = document.getElementById("searchbox").value
    let movies = await fetch(
      `https://www.omdbapi.com/?s=${sbox}&apikey=7880183f`
    );
    let data = await movies.json()
    let finaldata= await data.Search
    console.log(finaldata)
    finaldata.map((i) => {
        console.log(i);
        document.getElementById('final').innerHTML +=
            `<figure>
                <img src='${i.Poster}' alt='' />
                <h1>${i.Title }</h1>
                <h2>${i.Year}</h2>
            </figure>`
    })
    // document.getElementById('searchbox').value=''
    
} 

 function record() {
   var recognition = new webkitSpeechRecognition();
   recognition.lang = "en-GB";

   recognition.onresult = function (event) {
     console.log(event);
     document.getElementById("searchbox").value =
       event.results[0][0].transcript;
   };
   recognition.start();
 }


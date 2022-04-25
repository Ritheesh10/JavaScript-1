

function add() {
  let todo = document.getElementById("list");
  let inp = document.getElementById("input")
  todo.innerHTML += `<tr id='trr'>
    <td><input type='button' id='selects' ></td>
    <td  >${inp.value}</td>
    
    <td><button  onclick='drow()' >Delete</button></td>
    </tr>`;
    inp.value=''
}

let selects = document.getElementById("selects");
selects.addEventListener("click", () => {
  let trr = document.getElementById("trr");
    trr.style.background="green";
    
});

function drow() {
  let trr = document.getElementById("trr");
  trr.remove()
}

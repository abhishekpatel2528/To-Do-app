let box = document.querySelector("#box");
let addBtn = document.querySelector("#add");
let todo = document.querySelector("#todo");
let error = document.querySelector("#error");

addBtn.addEventListener("click", function (e) {
  if (!!todo.value) {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = "X";
    li.textContent = todo.value;
    div.appendChild(li);
    div.appendChild(p);
    box.appendChild(div);
    todo.value = "";
  } else {
    error.textContent = "Please enter a task";
  }
});

// box.addEventListener("click", function (e) {
//   box.removeChild(e.target);
// });

let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);

})

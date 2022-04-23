const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", function(){
   text.style.fontSize = `${this.value}px`;
});
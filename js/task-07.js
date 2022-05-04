const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const inputStartVal = input.value;
text.style.fontSize = `${inputStartVal}px`;

input.addEventListener("input", function(){
   text.style.fontSize = `${this.value}px`;
});
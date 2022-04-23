function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  btnCreate: document.querySelector("[data-create]"),
  btnDesctroy: document.querySelector("[data-destroy]"),
  input: document.querySelector("#controls input"),
  boxes: document.querySelector("#boxes"),
}

const createBoxes = function(amount){
  let boxRow = ``;
  const size = 20;
  for(let i=1; i<=amount; i+=1){
    boxRow += `<div style="background-color:${getRandomHexColor()}; width:${size + (10 * i)}px; height:${size + (10 * i)}px"></div>`;
  }
  return boxRow;
}

const destroyBoxes = function(){
  refs.boxes.innerHTML = "";
}

refs.btnCreate.addEventListener("click", function(){
  const amount = refs.input.value;
  boxes.insertAdjacentHTML("beforeend" ,createBoxes(amount));
});
refs.btnDesctroy.addEventListener("click", destroyBoxes);

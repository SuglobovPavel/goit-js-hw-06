const input = document.querySelector("#name-input");
const text = document.querySelector("#name-output");

input.addEventListener("input", () => {
   if(input.value === ""){
      text.textContent = "Anonymous";
   }else {
      text.textContent = input.value;
   }
});
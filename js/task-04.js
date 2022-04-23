const btnDecr = document.querySelector("[data-action='decrement']");
const btnIncr = document.querySelector("[data-action='increment']");
const counterValue = document.querySelector("#value");

let count = 0;

const changeCount = (count) => {
   counterValue.textContent = count;
};

btnDecr.addEventListener("click", ()=>{ 
   count = count <= 0 ?  0 : count - 1;
   changeCount(count);
});
btnIncr.addEventListener("click", ()=>{ 
   count += 1; 
   changeCount(count);
});
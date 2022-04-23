const input = document.querySelector("#validation-input");

input.addEventListener("blur", function(){
   const dataLength = this.dataset.length;
   const inputValue = this.value.length;
   if(inputValue >= dataLength){
      if(this.classList.contains("invalid")){
         this.classList.remove("invalid");
      }
      this.classList.add("valid");
   }else {
      if(this.classList.contains("valid")){
         this.classList.remove("valid");
      }
      this.classList.add("invalid");
   }
   console.dir(dataLength);
});
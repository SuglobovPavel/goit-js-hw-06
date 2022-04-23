const form = document.querySelector(".login-form");

form.addEventListener("submit", function(element){
   element.preventDefault();

   const formData = {};

   const inputsForm = Array.from(this.querySelectorAll("input"));
   if(inputsForm.some(element => element.value ===  "")){
      alert("Все поля обязательны для заполнения!");
   }else {
      inputsForm.map(elem => {
         formData[elem.name] = elem.value;
      });
      console.log(formData);
      this.reset();
   }
});
const form = document.querySelector(".login-form");

form.addEventListener("submit", function(element){
   element.preventDefault();

   const inputsForm = Array.from(this.querySelectorAll("input"));
   if(inputsForm.some(element => element.value ===  "")){
      alert("Все поля обязательны для заполнения!");
   }else {
      const formData = {
         email: element.currentTarget.elements.email.value,
         password: element.currentTarget.elements.password.value
      };
      console.log(formData);
      this.reset();
   }
});
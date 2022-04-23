const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector("#ingredients");

const ingredintListElems = ingredients.map(ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item"); 
  ingredientEl.textContent = ingredient;

  return ingredientEl;
});

ingredientsListRef.append(...ingredintListElems);

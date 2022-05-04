const categorisListRef = document.querySelector("#categories");
const categorisItem = categorisListRef.children;
const allCategoriesCount = categorisItem.length;

console.log("Number of categories: ", allCategoriesCount);


Array.from(categorisItem).map( category => {
   console.log("Category: ", category.firstElementChild.textContent);
   console.log("Elements: ", category.lastElementChild.children.length);
});
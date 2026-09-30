
async function getRecipes(searchText){
const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
const data = await response.json();
const meals = data.meals;
const firstMeal = meals[0];

console.log(firstMeal);
recipeContainer.innerHTML = firstMeal.strMeal;

recipeContainer.innerHTML =` <div class="recipe-card">

<img src="${firstMeal.strMealThumb}" alt="${firstMeal.strMeal}">
<h2>${firstMeal.strMeal}</h2>
<p>${firstMeal.strInstructions}</p> 

</div>
`;

console.log(firstMeal.strMeal);
console.log(firstMeal.strMealThumb);
console.log(firstMeal.strInstructions);
}
const recipeContainer = 
document.querySelector(".recipe-container");
const searchInput=document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

searchButton.addEventListener("click" , function(){
    console.log("Search button clicked");
    const searchText = searchInput.value;
    console.log(searchText);

    getRecipes(searchText);

})

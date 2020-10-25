import { elements } from "./base";

const renderRecip = (recipe) => {
  //console.log(recipe);
  /**
   * image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"
publisher: "101 Cookbooks"
publisher_url: "http://www.101cookbooks.com"
recipe_id: "47746"
social_rank: 100
source_url: "http://www.101cookbooks.com/archives/001199.html"
title: "Best Pizza Dough Ever"
   */
  const markup = `<li>
  <a class="results__link results__link--active" href="#${recipe.recipe_id}">
      <figure class="results__fig">
          <img src="${recipe.image_url}" alt="Test">
      </figure>
      <div class="results__data">
          <h4 class="results__name">${recipe.title}</h4>
          <p class="results__author">${recipe.publisher}</p>
      </div>
  </a>
</li>`;

  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};
export const clearTextInput = () => (elements.searchTextInput.value = "");

export const clearSearchList = () => (elements.searchResultList.innerHTML = "");

export const getInput = () => elements.searchTextInput.value;

export const renderRecipes = (recipes) =>
  recipes.forEach((element) => renderRecip(element));
// forEach(renderRecip) gj bolno

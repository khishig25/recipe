export const elements = {
  searchForm: document.querySelector(".search"),
  searchTextInput: document.querySelector(".search__field"),
  searchResultList: document.querySelector(".results__list"),
  searchResultDiv: document.querySelector(".results"),
};
export const elementStrings = {
  loader: "loader",
};

export const searchloader = (parent) => {
  const loader = `<div class="${elementStrings.loader}">
  <svg>
      <use href="img/icons.svg#icon-cw"</use>
  </svg>
</div>`;

  parent.insertAdjacentHTML("afterbegin", loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);
  // ene
  if (loader) loader.parentElement.removeChild(loader);
};

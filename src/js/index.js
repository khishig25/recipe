require("@babel/polyfill");
import Search from "./model/search";
import { clearLoader, elements, searchloader } from "./view/base";
import * as searchView from "./view/searchView";
//import query from "./model/search"; //defualt exportigg

// let search = new Search("pizza");
// search.doSearch().then((r) => console.log(r));
/**
 *
 *           ТӨЛӨВ гэж юм байна
 *  -Хайлтын query, үр дүн
 * тухайн үзүүлж байгаа жор
 * лайкласан жорууд
 * захиалж байгаа жорын найрлагууд
 *
 *
 *
 *
 *
 *
 *
 *
 */
const state = [];
const controlSearch = async () => {
  // 1) вэбээ хайлтын түлхүүр үг авна
  //
  const query = searchView.getInput();
  if (query) {
    // 2) Шинээр хайлтын обест үүсгэж өгнө
    state.search = new Search(query);
    // 3) хайлт гарч ирэхээс өмнө дэлгэцийг цэвэрлэж бэлдэнэ
    searchView.clearTextInput();
    searchView.clearSearchList();
    searchloader(elements.searchResultDiv);
    await state.search.doSearch();
    // 4) Хайлтын үр дүнг дэлгэцэнд үзүүлнэ

    //searchView.renderRecipes(state.search.result);
    clearLoader();
    if (state.search.result == undefined) {
      alert("Хайлтын илэрц алга");
    } else {
      searchView.renderRecipes(state.search.result);
    }
  }

  console.log("object :>> daragdlaa ");
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); //defualt uil ajilgaanuudiig ni boliulaa gesen ug
  controlSearch();
});

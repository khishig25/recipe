require("@babel/polyfill");
import Search from "./model/search";
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
  const query = "pizza";
  if (query) {
    // 2) Шинээр хайлтын обест үүсгэж өгнө
    state.search = new Search(query);
    // 3) хайлт гарч ирэхээс өмнө дэлгэцийг цэвэрлэж бэлдэнэ
    await state.search.doSearch();
    // 4) Хайлтын үр дүнг дэлгэцэнд үзүүлнэ
    console.log(state.search.result);
  }

  console.log("object :>> daragdlaa ");
};

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault(); //defualt uil ajilgaanuudiig ni boliulaa gesen ug
  controlSearch();
});

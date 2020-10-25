require("@babel/polyfill");
import Search from "./model/search";
//import query from "./model/search"; //defualt exportigg

let search = new Search("pizza");
search.doSearch().then((r) => console.log(r));

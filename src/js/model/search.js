require("@babel/polyfill");
import axios from "axios";
export default class Search {
  constructor(query) {
    this.query = query;
  }
  async doSearch() {
    try {
      let result = await axios(
        "https://forkify-api.herokuapp.com/api/search?q=" + this.query
      );

      this.result = result.data.recipes;
      // console.log(this.result);
      return this.result;
    } catch (error) {
      console.log("Асуудал гарсан" + error);
    }
  }
}

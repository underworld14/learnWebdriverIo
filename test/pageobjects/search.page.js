import Page from "./page";

class SearchPage extends Page {
  get searchInput() {
    return $("#gh-ac");
  }

  get searchBtn() {
    return $("#gh-btn");
  }

  get category() {
    return $("#gh-cat option:nth-child(1)");
  }

  searchProduct(input) {
    this.searchInput.setValue(input);
    this.searchBtn.click();
  }

  open() {
    return super.open("https://www.ebay.com/");
  }
}

export default new SearchPage();

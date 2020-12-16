import SearchPage from "../pageobjects/search.page";
import { waitForTextChanged } from "../helpers";

describe("ebay search function", () => {
  before(() => {
    SearchPage.open();
  });

  it("it should open the main url and verify the title", () => {
    expect(browser).toHaveTitle("Electronics, Cars, Fashion, Collectibles & More | eBay");
  });

  it("should search for a product and verify the search text value", () => {
    SearchPage.searchProduct("Laptop");
    expect(SearchPage.searchInput).toHaveValue("Laptop");
  });

  it("should redirect to the new page and verify the title", () => {
    expect(browser).toHaveTitleContaining("Laptop | eBay");
  });

  it("should update the search category", () => {
    waitForTextChanged(SearchPage.category, "PC Laptops & Netbooks");
    expect(SearchPage.category).toHaveTextContaining("PC Laptops & Netbooks");
  });
});

import WatchesPage from "../pageobjects/watches.page";

describe("Watches page", () => {
  before(() => {
    WatchesPage.open();
    WatchesPage.navigate();
  });

  it("should navigate to page and verify the title", () => {
    expect(browser).toHaveTitleContaining("Watches, Parts & Accessories for Sale - New & Used Watches - eBay");
  });

  it("Should verify the breadcrumb", () => {
    expect(WatchesPage.breadCrumbLast).toHaveTextContaining("Watches, Parts & Accessories");
  });

  it("Should verify page banner title", () => {
    expect(WatchesPage.pageBanner).toHaveText("Watches, Parts & Accessories");
  });

  it("Should display list of watches products", () => {
    expect(WatchesPage.listProduct).toBeDisplayed();
  });
});

import Page from "./page";

class WatchesPage extends Page {
  get fashionLink() {
    return $('.hl-cat-nav__js-tab[data-currenttabindex="1"] a');
  }

  get watchesLink() {
    return $('a.hl-cat-nav__js-link[href*="Watches-Parts-Accessories"]');
  }

  get breadCrumbList() {
    return $$(".b-breadcrumb ol li");
  }

  get breadCrumbLast() {
    return this.breadCrumbList[this.breadCrumbList.length - 1].$("span");
  }

  get pageBanner() {
    return $(".b-pageheader__text");
  }

  get listProduct() {
    return $(".b-list__items_nofooter");
  }

  navigate() {
    this.fashionLink.moveTo();
    this.watchesLink.waitForDisplayed();
    this.watchesLink.click();
  }
}

export default new WatchesPage();

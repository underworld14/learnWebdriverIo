import Page from "./page";

class WatchesPage extends Page {
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

  open() {
    return super.open("https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535");
  }
}

export default new WatchesPage();

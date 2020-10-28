module.exports = class Page {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.reachablePages = [];
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getReachablePages() {
    return this.reachablePages;
  }

  addReachablePage(page) {
    this.reachablePages.push(page);
  }
};

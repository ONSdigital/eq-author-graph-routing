const Page = require("./Page");

module.exports = class Graph {
  constructor(title) {
    this.title = title;
    this.pages = [];
    this.rules = [];
    this.currentPage = null;
  }

  getTitle() {
    return this.title;
  }

  getPages() {
    return this.pages;
  }

  addPage({ id, title }) {
    const page = new Page(id, title);
    this.pages.push(page);
    return page;
  }
};

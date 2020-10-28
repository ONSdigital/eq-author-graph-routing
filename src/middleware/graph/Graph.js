const Page = require("./Page");
const Rule = require("./Rule");

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

  getRules() {
    return this.rules;
  }

  getPageById(id) {
    const pages = this.getPages();
    const page = pages.filter((page) => page.getId() === id);
    return page[0];
  }

  addPage({ id, title }) {
    const page = new Page(id, title);
    this.pages.push(page);
    return page;
  }

  addRule(id, from, to) {
    const rule = new Rule(id, from, to);
    this.rules.push(rule);
    return rule;
  }
};

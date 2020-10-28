module.exports = class Rule {
  constructor(id, from, to) {
    this.id = id;
    this.from = from;
    this.to = to;

    from.addReachablePage(to);
  }

  getId() {
    return this.id;
  }

  getFrom() {
    return this.from;
  }

  getTo() {
    return this.to;
  }
};

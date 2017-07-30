var _ = require("lodash");

var BookWorm = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.books = [];
}

BookWorm.prototype.buy = function(book) {
  if (this.cash >= book.price){
    this.cash -= book.price;
    this.books.push(book);
  }
};

BookWorm.prototype.sell = function(book) {
  if (this.books.includes(book)){
    this.cash += book.price;
    _.pull(this.books, book);
  }
};

BookWorm.prototype.totalValue = function() {
  return _.sumBy(this.books, 'price');
};

BookWorm.prototype.genreValue = function(genre) {
  return _.sumBy(_.filter(this.books, ['genre', genre]), 'price');
};

BookWorm.prototype.longest = function() {
  return _.maxBy(this.books, 'pages').info();
};

BookWorm.prototype.sortAscending = function() {
  return _.sortBy(this.books, 'price');
};

BookWorm.prototype.sortDescending = function() {
  return this.sortAscending().reverse();
};

BookWorm.prototype.compare = function(worm2) {
  if (this.totalValue() > worm2.totalValue()){
    return (this.name + "'s books are worth more (" + this.totalValue() + ") than " + worm2.name + "'s (" + worm2.totalValue() + ")");
  } else if (this.totalValue() < worm2.totalValue()){
    return (this.name + "'s books are worth less (" + this.totalValue() + ") than " + worm2.name + "'s (" + worm2.totalValue() + ")");
  } else if (this.totalValue() === worm2.totalValue()){
    return (this.name + " and " + worm2.name + "'s books are worth the same amount (" + this.totalValue() + ")");
  }
};

module.exports = BookWorm;
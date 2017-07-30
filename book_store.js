var _ = require("lodash");

var BookStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
}

BookStore.prototype.books = function() {
 return this.inventory.map(function(book){
    return book.info();
  }).join("\n");
};

BookStore.prototype.sell = function(book) {
  this.balance += book.price;
  _.pull(this.inventory, book);
};

BookStore.prototype.value = function() {
  return this.balance + _.sumBy(this.inventory, 'price');
};

BookStore.prototype.genre = function(genre) {
  var filtered = _.filter(this.inventory, ['genre', genre]);
  return filtered.map(function(book){
    return book.info();
  }).join("\n");
};

module.exports = BookStore;
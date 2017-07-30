var _ = require("lodash");

var Book = function(title, author, genre, price, pages){
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.price = price;
  this.pages = pages;
  this.controversial = false;
}

Book.prototype.info = function() {
  return ("Title: " + this.title + ", Author: " + this.author + ", Genre: " + this.genre + ", Price: £" + this.price + ", Pages: " +this.pages);
};

module.exports = Book;
var _ = require("lodash");
var BookWorm = require("./bookworm.js");

var AngryBookWorm = function(name, cash){
  BookWorm.call(this, name, cash);
}

AngryBookWorm.prototype = Object.create(BookWorm.prototype);

AngryBookWorm.prototype.constructor = AngryBookWorm;

AngryBookWorm.prototype.burn = function(book) {
  if(book.controversial && this.books.includes(book)){
    _.pull(this.books, book);
  }
};

AngryBookWorm.prototype.deface = function(book) {
  if(book.controversial && this.books.includes(book)){
    book.pages -= _.random(book.pages);
  }
};

AngryBookWorm.prototype.read = function(book) {
  if(book.controversial && this.books.includes(book)){
    return "Oh my days!"
  } else if(book.controversial === false && this.books.includes(book)){
    return "What a nice wholesome book"
  }
};

module.exports = AngryBookWorm;
var assert = require("assert");
var Book = require("../book.js");
var BookStore = require("../book_store.js");
var BookWorm = require("../bookworm.js");
var AngryBookWorm = require("../angrybookworm.js");

describe("BookWorm", function(){

  var worm1;
  var worm2;
  var book1;
  var book2;
  var book3;
  var book4;
  var books;

  beforeEach(function(){
    worm1 = new BookWorm("Tim", 50);
    worm2 = new AngryBookWorm("Barry", 3);
    book1 = new Book("Harry Potter and the Chamber of Secrets", "JK Rowling", "Fantasy", 4, 251);
    book2 = new Book("50 Shades of Grey", "EL James", "Erotic", 1, 514);
    book2.controversial = true;
    book3 = new Book("The Hobbit", "JRR Tolkien", "Fantasy", 5, 368);
    book4 = new Book("How I Won the Yellow Jumper", "Ned Boulting", "Sport", 3, 432);
    books = [book1, book2, book3, book4];
    worm1.books = books;
  })

  it('should be able to buy a book and spend money', function(){
    worm2.buy(book2);
    assert.strictEqual(worm2.cash, 2);
    assert.strictEqual(worm2.books.length, 1);
  });

  it('should be able to sell a book and gain money', function(){
    worm1.sell(book1);
    assert.strictEqual(worm1.cash, 54);
    assert.strictEqual(worm1.books.length, 3);
  });

  it('should not be able to buy a book if they cannot afford it', function(){
    worm2.buy(book1);
    assert.strictEqual(worm2.cash, 3);
    assert.strictEqual(worm2.books.length, 0);
  });

  it('should be able to view the total value of their collection', function(){
    assert.strictEqual(worm1.totalValue(), 13);
  });

  it('should be able to view the value of all books of a given genre', function(){
    assert.strictEqual(worm1.genreValue('Fantasy'), 9);
  });

  it('should be able to view their longest book', function(){
    assert.strictEqual(worm1.longest(), book2.info());
  });

  it('should be able to sort their books by value ascending', function(){
    assert.deepEqual(worm1.sortAscending(), [book2, book4, book1, book3]);
  });

  it('should be able to sort their books by value descending', function(){
    assert.deepEqual(worm1.sortDescending(), [book3, book1, book4, book2]);
  });

  it('should be able to compare the value of their collection with another bookworm', function(){
    worm2.books = [book2, book3];
    assert.strictEqual(worm1.compare(worm2), "Tim's books are worth more (13) than Barry's (6)")
  });

  it('if AngryBookWorm should be able to burn controversial books', function(){
    worm2.buy(book2);
    worm2.burn(book2);
    assert.strictEqual(worm2.books.length, 0);
  });

  it('if AngryBookWorm should be able to deface controversial books, removing a random num of pages', function(){
    worm2.buy(book2);
    worm2.deface(book2);
    assert.notStrictEqual(book2.pages, 514);
  });

  it('if AngryBookWorm should respond in shock if trying to read a controversial book', function(){
    worm2.books = [book2, book4];
    assert.strictEqual(worm2.read(book2), "Oh my days!");
    assert.strictEqual(worm2.read(book4), "What a nice wholesome book");
  });

})
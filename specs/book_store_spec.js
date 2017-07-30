var assert = require("assert");
var Book = require("../book.js");
var BookStore = require("../book_store.js");

describe("Book Store", function() {

  var store;
  var book1;
  var book2;
  var book3;
  var book4;
  var books;

  beforeEach(function(){
    store = new BookStore("Sam's Books", "Elgin", 5000);
    book1 = new Book("Harry Potter and the Chamber of Secrets", "JK Rowling", "Fantasy", 4, 251);
        book2 = new Book("50 Shades of Grey", "EL James", "Erotic", 1, 514);
        book3 = new Book("The Hobbit", "JRR Tolkien", "Fantasy", 5, 368);
        book4 = new Book("How I Won the Yellow Jumper", "Ned Boulting", "Sport", 3, 432);
    books = [book1, book2, book3, book4];
    store.inventory = books;
  })

  it("should list the whole inventory", function() {
    assert.strictEqual(store.books(), [book1.info(),book2.info(),book3.info(),book4.info()].join("\n"))
  });

  it("should sell a book and adjust the store balance by the book's value", function(){
    store.sell(book1);
    assert.strictEqual(store.balance, 5004);
    assert.strictEqual(store.inventory.length, 3);
  });

  it("should give the store balance and value of the inventory", function(){
    assert.strictEqual(store.value(), 5013);
  });

  it("should view all books of a given genre", function() {
    assert.strictEqual(store.genre("Fantasy"), [book1.info(), book3.info()].join("\n"))
  });



})
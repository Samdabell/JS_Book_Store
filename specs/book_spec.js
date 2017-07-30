var assert = require("assert");
var Book = require("../book.js");

describe("Book", function() {

  var book1

  beforeEach( function(){
    book1 = new Book("Harry Potter and the Chamber of Secrets", "JK Rowling", "Fantasy", 4, 251);
  })

  it("should print out the properties of the book as a string", function(){
    assert.strictEqual(book1.info(), "Title: Harry Potter and the Chamber of Secrets, Author: JK Rowling, Genre: Fantasy, Price: £4, Pages: 251");
  })
})
class libraryClass {
  constructor() {}
  books = {};
  // searchBook
  searchBook(bookName) {
    if (this.books[bookName] == "exist") {
      console.log(bookName + " 可借閱");
    } else if (this.books[bookName] == "borrow") {
      console.log(bookName + " 已借出");
    } else if (this.books[bookName] == undefined) {
      console.log(bookName + " 不存在");
    }
  }
  // addBook
  addBook(bookName) {
    if (this.books[bookName] == "exist") {
      console.log(bookName + " 已存在");
    } else if (this.books[bookName] == undefined) {
      this.books[bookName] = "exist";
      console.log("新增書本：" + bookName);
    }
  }
  // borrowBook
  borrowBook(bookName) {
    if (this.books[bookName] == "exist") {
      this.books[bookName] = "borrow";
      console.log("借出書本：" + bookName);
    } else if (this.books[bookName] == "borrow") {
      console.log(bookName + " 已借出");
    } else if (this.books[bookName] == undefined) {
      console.log(bookName + " 不存在");
    }
  }
  // returnBook
  returnBook(bookName) {
    if (this.books[bookName] == "exist") {
      console.log(bookName + " 可借閱");
    } else if (this.books[bookName] == "borrow") {
      this.books[bookName] == "esixt";
      console.log("歸還書本：" + bookName);
    } else if (this.books[bookName] == undefined) {
      console.log(bookName + " 不存在");
    }
  }
}

const library = new libraryClass();

library.searchBook("你不知道的JavaScript"); // "你不知道的JavaScript 不存在"

library.addBook("你不知道的JavaScript"); // "新增書本：你不知道的JavaScript"
library.searchBook("你不知道的JavaScript"); // "你不知道的JavaScript 可借閱"

library.borrowBook("你不知道的JavaScript"); // "借出書本：你不知道的JavaScript"
library.searchBook("你不知道的JavaScript"); // "你不知道的JavaScript 已借出"

library.returnBook("你不知道的JavaScript"); // "歸還書本：你不知道的JavaScript"
library.searchBook("你不知道的JavaScript"); // "你不知道的JavaScript 可借閱"

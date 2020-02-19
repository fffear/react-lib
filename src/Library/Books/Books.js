import React from "react";
import Book from "./Book/Book";

const Books = props => {
  return props.books.map((book, index) => {
    return (
      <Book
        key={book.id}
        title={book.title}
        author={book.author}
        pages={book.pages}
        read={book.read}
        changeReadStatusHandler={() => props.changeReadStatusHandler(book.id)}
        // removeBookHandler={() => props.removeBookHandler(book.id)}
      />
    );
  });
};

export default Books;

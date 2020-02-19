import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Library from "./Library/Library";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          id: 0,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          pages: 295,
          read: "Not Read Yet"
        },
        {
          id: 1,
          title: "The 48 Laws of Power",
          author: "Robert Greene",
          pages: 480,
          read: "Not Read Yet"
        },
        {
          id: 2,
          title: "The Prince",
          author: "Niccolo Machiavelli",
          pages: 112,
          read: "Not Read Yet"
        },
        {
          id: 3,
          title: "Tides of War",
          author: "Steven Pressfield",
          pages: 448,
          read: "Not Read Yet"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Library books={this.state.books} />
      </div>
    );
  }
}

export default App;

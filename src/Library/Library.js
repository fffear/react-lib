import React from "react";
// import Books from "./Books/Books";
import classes from "./Library.module.css";

const library = props => {
  return (
    <table className={classes.Library}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Read</th>
          <th>Change Read Status</th>
          <th>Remove Book</th>
        </tr>
      </thead>

      {/* <tbody>
        <Books
          books={props.books}
          removeBookHandler={props.removeBookHandler}
          changeReadStatusHandler={props.changeReadStatusHandler}
        />
      </tbody> */}
    </table>
  );
};

export default library;

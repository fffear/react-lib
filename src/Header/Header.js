import React from "react";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import classes from "./Header.module.css";

const header = props => {
  return (
    <header className={classes.Header}>
      <h1>My Library</h1>
      <Modal buttonText="Add New Book" addNewBook={props.addNewBook}>
        <Input
          inputtype="input"
          id="title"
          label="Title"
          type="text"
          name="title"
          placeholder="Title"
          required
        />

        <Input
          inputtype="input"
          id="author"
          label="Author"
          type="text"
          name="author"
          placeholder="Author"
          required
        />

        <Input
          inputtype="input"
          id="no-of-pages"
          label="No of pages"
          type="number"
          name="no-of-pages"
          placeholder="No of pages"
          required
          min="1"
        />

        <Input
          inputtype="select"
          id="read-status"
          label="Read Status"
          name="read-status"
          options={["Read", "Not Read Yet"]}
        />

        <button className={classes.SubmitBtn} type="submit">
          Add Book
        </button>
      </Modal>
    </header>
  );
};

export default header;

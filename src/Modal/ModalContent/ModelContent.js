import React from "react";
import ReactDOM from "react-dom";

// import Input from "../../Input/Input";
import classes from "./ModalContent.module.css";

const ModalContent = props => {
  return ReactDOM.createPortal(
    <aside
      className={classes.ModalCover}
      onClick={event => {
        if (event.target.className === classes.ModalCover) {
          props.closeModal();
        }
      }}
    >
      <div className={classes.ModalArea}>
        <div className={classes.ModalClose} onClick={props.closeModal}>
          X
        </div>

        <div className={classes.ModalBody}>{props.children}</div>
      </div>
    </aside>,
    document.body
  );
};

export default ModalContent;

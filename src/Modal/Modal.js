import React, { Fragment, Component } from "react";
import ModalContent from "./ModalContent/ModelContent";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    };
  }

  showModal = () => {
    this.setState({ isShown: true });
  };

  closeModal = () => {
    this.setState({ isShown: false });
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.showModal}>{this.props.buttonText}</button>

        {this.state.isShown ? (
          <ModalContent
            closeModal={this.closeModal}
            addNewBook={this.props.addNewBook}
          >
            <form
              onSubmit={event => {
                this.props.addNewBook(event);
                this.closeModal();
              }}
            >
              {this.props.children}
            </form>
          </ModalContent>
        ) : (
          <Fragment />
        )}
      </Fragment>
    );
  }
}

export default Modal;

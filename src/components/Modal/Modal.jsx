import React, { Component } from 'react';

import { ModWindow, Overlay } from './ModalStyled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };
  render() {
    const { imageURL } = this.props;

    return (
      <Overlay onClick={this.onBackdropClick}>
        <ModWindow>
          <img src={imageURL} alt="" />
        </ModWindow>
      </Overlay>
    );
  }
}

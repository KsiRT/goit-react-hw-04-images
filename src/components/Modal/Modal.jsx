import React, { useEffect } from 'react';

import { ModWindow, Overlay } from './ModalStyled';

export const Modal = ({ closeModal, imageURL }) => {
  // componentDidMount()

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // componentWillUnmount() перетворюється на return з useEffect'a
    return (()=>document.removeEventListener('keydown', handleKeyDown));
  }, [closeModal]);

  return (
    <Overlay onClick={onBackdropClick}>
      <ModWindow>
        <img src={imageURL} alt="" />
      </ModWindow>
    </Overlay>
  );
};

import { useEffect } from "react";

import PropTypes from "prop-types";

import css from './Modal.module.css';

function Modal({img, onClose}) {
  
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  });


  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); 
    }
  }

  return (
    <div className={css.Overlay}
      onClick={handleOverlayClick}>
      <div className={css.Modal}>
        <img src={img} className={css.img} alt="" />
      </div>
    </div>
  );
};



Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired, 
};


export default Modal;



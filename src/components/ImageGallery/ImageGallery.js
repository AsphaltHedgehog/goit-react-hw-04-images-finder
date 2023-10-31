

import PropTypes from "prop-types";

import css from './ImageGallery.module.css'


function ImageGallery(props) {
  return (
    <ul className={css.list}>
      {props.children}
    </ul>
  );
};


ImageGallery.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
};


export default ImageGallery;
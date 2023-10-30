import React,{ Component } from "react";

import PropTypes from "prop-types";

import css from './ImageGallery.module.css'


class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.list}>
        {this.props.children}
      </ul>
    );
  };
};

ImageGallery.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
};


export default ImageGallery;
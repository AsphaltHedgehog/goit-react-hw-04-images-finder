import React,{ Component } from "react";

import PropTypes from "prop-types";

import css from './ImageGalleryItem.module.css'


class ImageGalleryItem extends Component {

  handlerRender = () => {
    const { gallery, onClick } = this.props;
    if (!gallery) {
      return
    }

    return gallery.map((el, i) => (
      <li className={css.li} key={el.id}>
        <img
          src={el.webformatURL}
          alt={el.tags}
          className={css.img}
          data-largeimg= {el.largeImageURL}
          onClick={() => onClick(el.largeImageURL)}
        />
      </li>
    ));
  };

  render() {
    return (
      this.handlerRender()
    );
  };
};

ImageGalleryItem.propTypes = {
  gallery: PropTypes.array,
  onClick: PropTypes.func,
}


export default ImageGalleryItem;
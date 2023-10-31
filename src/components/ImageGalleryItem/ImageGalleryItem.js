
import PropTypes from "prop-types";

import css from './ImageGalleryItem.module.css'


function ImageGalleryItem({gallery, onClick}) {

  const handlerRender = () => {
    if (!gallery) {
      return
    };

    return gallery.map((el, i) => (
      <li className={css.li} key={el.id}>
        <img
          src={el.webformatURL}
          alt={el.tags}
          className={css.img}
          data-largeimg={el.largeImageURL}
          onClick={() => onClick(el.largeImageURL)}
        />
      </li>
    ));
  };


  return (
    handlerRender()
  );
};


ImageGalleryItem.propTypes = {
  gallery: PropTypes.array,
  onClick: PropTypes.func,
}


export default ImageGalleryItem;
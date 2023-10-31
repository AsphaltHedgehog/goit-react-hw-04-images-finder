import { useState, useEffect } from 'react';

import css from './style/styles.module.css'

import Spid from './Loader/Loader.js'

import Modal from './Modal/Modal.js'
// ========================================================
import Searchbar from './Searchbar/Searchbar.js';

import FetchQuery from '../Api/SearchApi.js';

// ========================================================

import ImageGallery from './ImageGallery/ImageGallery.js';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem.js';

import Button from './Button/Button.js';


//==========================================================

function App() {

  const [searchQuery, setQuery] = useState('');
  const [queryResult, setResult] = useState([]);
  const [page, setPage] = useState(0);
  const [totalHits, setHits] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isModal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState('');


  useEffect(() => {
    if (page === 0) {
      return;
    };
    const fetchData = async () => {
      setLoading(true);
      try {
        const { hits, totalHits } = await FetchQuery(searchQuery, page);
        setResult(prev => [...prev, ...hits]);
        setHits(totalHits)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page, searchQuery]); 

  const onSubmitHandler = (query) => {

    if (query === searchQuery) {
      return alert('введите новый запрос')
    } 

    setQuery(query);
    setResult([]);
    setPage(1);

  };

  const handleModalImg = (largeImgUrl) => {
    setModal(true);
    setModalImg(largeImgUrl);
  };


  const onBtnHandler = () => {
    setPage(prevPage => prevPage + 1);
    FetchQuery();
  };

  const handleModalClose = () => {
    setModal(false);
    setModalImg('')
  };

  return (
    <div className={css.gallery}>
      {isModal && <Modal
        img={modalImg}
        onClose={handleModalClose}
      />}
      <header className={css.header}>
        <Searchbar onSubmit={onSubmitHandler} />
      </header>

      {queryResult.length > 0 &&
        <div className={css.wrapper}>
          <ImageGallery>
            <ImageGalleryItem
              gallery={queryResult}
              onClick={handleModalImg} />
          </ImageGallery>
        </div>
      }

      {isLoading && <Spid />}
      {totalHits > queryResult.length > 0 && !isLoading && (<Button
        onClick={onBtnHandler}
      />)
      }
    </div>
  );
};

export default App;
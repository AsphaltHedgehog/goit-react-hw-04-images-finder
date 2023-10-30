import React, {Component} from 'react';
// import ReactDOM from 'react-dom/client';

import css from './style/styles.module.css'

import Spid from './Loader/Loader.js'

import Modal from './Modal/Modal.js'
// ========================================================
import Searchbar from './Searchbar/Searchbar.js';

import FetchQuery from './Api/SearchApi.js'

// ========================================================

import ImageGallery from './ImageGallery/ImageGallery.js'

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem.js'

import Button from './Button/Button.js'

//==========================================================

class App extends Component {
  state = {
    searchQuery: '',
    queryResult: [],
    page: 1,
    totalHits: null,
    isLoading: false,
    isModal: false,
    modalImg: ''
  };

  async componentDidUpdate(prevProps, prevState) {
    console.log();
    const { searchQuery, page } = this.state
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({isLoading: true})
      try {
        const { hits, totalHits } = await FetchQuery(searchQuery, page);
        this.setState(prevState => ({
          queryResult: [...prevState.queryResult, ...hits],
          totalHits,
        }));
      } catch (error) { console.error(error) }
      finally {
        this.setState({isLoading: false})
      };
    }
  }

  onSubmitHandler = (query) => {
    if (query === this.state.searchQuery) {
      return alert('введите новый запрос')
    } 
    
    this.setState(() => ({
      queryResult: [],
      searchQuery: query,
      page: 1
    }))
  };

  handleModalImg = (largeImgUrl) => {
    this.setState({ isModal: true, modalImg: largeImgUrl});
  }


  onBtnHandler = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }), this.FetchQuery)
    
  }

  handleModalClose = () => {
    this.setState({ isModal: false, modalImg: '' });
  };
  
  render() {
    const {
      queryResult,
      totalHits,
      isLoading,
      isModal,
      modalImg,
    } = this.state
    return (
      <div className={css.gallery}>
        {isModal && <Modal
          img={modalImg}
          onClose={this.handleModalClose}
        />}
        <header className={css.header}>
          <Searchbar onSubmit={this.onSubmitHandler} />
        </header>

        {this.state.queryResult.length > 0 &&
          <div className={css.wrapper}>
            <ImageGallery>
              <ImageGalleryItem
                gallery={this.state.queryResult}
                onClick={this.handleModalImg} />
            </ImageGallery>
          </div>
        }
        {isLoading && <Spid />}
        {totalHits > queryResult.length > 0 && !isLoading && (<Button
          onClick={this.onBtnHandler}
        />)
        }
      </div>
    );
  };
};


export default App;
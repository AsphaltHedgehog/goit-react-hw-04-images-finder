import React,{ Component } from "react";

import PropTypes from "prop-types";

import css from './Searchbar.module.css'

class Searchbar extends Component {
  state = {
    query: '',
  };

  handlerInputChange = inputData => {
    this.setState({ query: inputData });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    if (this.state.query.trim() === '') {
      alert('Введи что-то');
      this.reset();
      return;
      
    };

    this.props.onSubmit(this.state.query);
  };

  reset = () => {
    this.setState({query: '',})
  }


  render() {
    return (
      <div className={css.wrapper}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <button type='submit' className={css.button}><span className="btn-label">Search</span></button>

          <input
            type='search'
            value={this.state.query}
            onChange={e => this.handlerInputChange(e.target.value)}
            className={css.input}
            autoFocus
            placeholder="photo"
          >
          </input>
        </form>
      </div>
    );
  };
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}


export default Searchbar;
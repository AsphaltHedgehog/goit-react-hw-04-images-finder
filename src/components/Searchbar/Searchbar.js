import { useState } from "react";

import PropTypes from "prop-types";

import css from './Searchbar.module.css'

function Searchbar({onSubmit}) {
  const [query, setQuery] = useState('')

  const handlerInputChange = inputData => {
    setQuery(inputData);
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    if (query.trim() === '') {
      alert('Введи что-то');
      reset();
      return;
    };

    onSubmit(query);
  };

  const reset = () => {
    setQuery('');
  };


  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button type='submit' className={css.button}><span className="btn-label">Search</span></button>

        <input
          type='search'
          value={query}
          onChange={e => handlerInputChange(e.target.value)}
          className={css.input}
          autoFocus
          placeholder="photo"
        >
        </input>
      </form>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};


export default Searchbar;
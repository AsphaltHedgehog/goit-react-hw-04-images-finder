

import PropTypes from "prop-types";

import css from './Button.module.css'


function Button({onClick}) {
  const onBtnRender = () => {
    return <button
      onClick={onClick}
      className={css.btn}
    > Load More</button>
  }


  return (
    onBtnRender()
  );
};


Button.propTypes = { 
  onClick: PropTypes.func.isRequired,
};

export default Button;
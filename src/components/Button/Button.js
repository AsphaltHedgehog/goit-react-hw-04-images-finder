import React,{ Component } from "react";

import PropTypes from "prop-types";

import css from './Button.module.css'


class Button extends Component {
  onBtnRender = () => {
    return <button
      onClick={this.props.onClick}
      className={css.btn}
    > Load More</button>
  }

  render() {
    return (
      this.onBtnRender()
    )
  };
};

Button.propTypes = { 
  onClick: PropTypes.func.isRequired,
};

export default Button;
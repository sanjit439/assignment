import React from 'react';
import PropTypes from 'prop-types';
import './itemFormError.css'

const ItemFormError=({msg})=><p className="item-form-error">{msg}</p>

export default ItemFormError;

ItemFormError.propTypes = {
    msg: PropTypes.string.isRequired
  };
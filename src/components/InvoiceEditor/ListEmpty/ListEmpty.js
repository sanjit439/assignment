import React from 'react';
import PropTypes from 'prop-types';
import './listEmpty.css'

const ListEmpty=({msg})=><p className="list-empty-msg">{msg}</p>

export default ListEmpty;

ListEmpty.propTypes = {
    msg: PropTypes.string.isRequired
  };
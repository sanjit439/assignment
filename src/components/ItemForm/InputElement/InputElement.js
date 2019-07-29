import React from 'react';
import  './InputElement.css'
import PropTypes from 'prop-types';


const InputElement=({value,type,label,onHandleChange})=>
{
return (
    <div className="input-element"> 
       <label>{label}</label>
       <input value={value} onChange={onHandleChange} type={type}/>
    </div>
)

}

export default InputElement;

InputElement.propTypes = {
    label: PropTypes.string.isRequired, 
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onHandleChange:PropTypes.func.isRequired,
};
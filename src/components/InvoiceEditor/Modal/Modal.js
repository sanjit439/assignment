import React from 'react';
import PropTypes from 'prop-types';
import  './modal.css'

const Modal=(props)=>
{
    return (
        <div className="modal">
            <div onClick={props.close} className="back-layer">        
            </div>
            <div  className="modal-body"> 
            <span className="modal-close" onClick={props.close}>&times;</span>
                {props.children}
            </div>
        </div>
)
}
export default Modal;


Modal.propTypes = {
     close: PropTypes.func.isRequired, 
};
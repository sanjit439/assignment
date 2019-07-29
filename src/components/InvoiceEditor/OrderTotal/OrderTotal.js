import React from 'react';
import './orderTotal.css'
import {changeToTwoDecPlaces} from '../../../utility'
import PropTypes from 'prop-types';

const OrderTotal=({partialTotal,tax})=>{

return(
    <div className="order-total">
        <div className="display-flex append-bottom5">
            <span className="order-total-label">Sub total</span>
            <span className="pull-right amount">${changeToTwoDecPlaces(partialTotal)}</span>
        </div>
        <div className="display-flex append-bottom5">
            <span className="order-total-label">Tax</span>
            <span className="pull-right amount">${changeToTwoDecPlaces(tax)}</span>
        </div>
        <div className="display-flex append-bottom5">
            <span className="order-total-label">Total</span>
            <strong className="pull-right amount">${changeToTwoDecPlaces(partialTotal + tax)}</strong>
        </div>
    </div>
    )
}

export default OrderTotal;


OrderTotal.propTypes = {
    partialTotal: PropTypes.number.isRequired,
    tax:PropTypes.number.isRequired,
 };

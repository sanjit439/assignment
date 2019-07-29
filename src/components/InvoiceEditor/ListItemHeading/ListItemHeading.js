import React from 'react';
import './listItemHeading.css';

const ListItemHeading=()=>{

return(
    <div className="heading-section">
        <div className="list-item-name">
            Name
        </div>
        <div className="list-item-qty" >
            Quantity
        </div>
        <div className="list-item-price">
            Price
        </div>
        <div className="list-item-total">
            Total
        </div>
     </div>
)
}

export default ListItemHeading;


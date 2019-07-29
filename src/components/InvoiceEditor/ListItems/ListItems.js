import React from 'react';
import PropTypes from 'prop-types';
import ListItemHeading from '../ListItemHeading/ListItemHeading';
import './listItems.css';
import {changeToTwoDecPlaces} from '../../../utility'
import ListEmpty from '../ListEmpty/ListEmpty';

const ListItems=({items,remove,togglePopup,changeActive})=>{

const listClicked=(index)=>{
    togglePopup();
    changeActive(index);
    
}
return(
    <div>
        
       <ListItemHeading/>
       {items.length===0 && <ListEmpty msg="Please add Items to the list"/>}
        <ul className="list-items">
            {
                items.map((item,index)=> (
                <li onClick={()=>listClicked(index)}  key={index}>
                    <div className="list-item-name">
                        {item.name}
                    </div>
                    <div className="list-item-qty" >
                        {item.qty}
                    </div>
                    <div className="list-item-price">
                        ${changeToTwoDecPlaces(item.price)}
                    </div>
                    <div className="list-item-total">
                        ${changeToTwoDecPlaces(item.price * item.qty)}
                    </div>
                    <span onClick={(e)=>{e.stopPropagation(); remove(index)}} className="list-item-remove">
                    &times;
                    </span>
                </li>
            ))
            }
        </ul>
        <span onClick={togglePopup} className="list-item-add">Add List +</span>
        
    </div>
       
)
}

export default ListItems;

ListItems.propTypes = {
    items: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired, 
    togglePopup: PropTypes.func.isRequired,
    changeActive: PropTypes.func.isRequired,
  };

import * as actionTypes from './actionTypes';

export const removeItem=(index)=>
{
    return{
        type:actionTypes.REMOVE_ITEM,
        payload:index
    }

}

export const addItem=(item)=>
{
    return{
        type:actionTypes.ADD_ITEM,
        payload:item
    }
}

export const editItem=(index,item)=>
{
 
    return{
        type:actionTypes.EDIT_ITEM,
        payload:{
            index:index,
            item:item
        }
    }
}


export const changeActiveList=(index)=>
{
    
    return{
        type:actionTypes.CHANGE_ACTIVE,
        payload:index
    }

}
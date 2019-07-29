import * as actionTypes from '../Actions/actionTypes';

const initialState={
    list:[
           {
               name:'Carrying-Bag',
               qty:1,
               price:1
           }   
                   
        ],
    itemActive:-1
    }
const reducer=(state=initialState,action)=>{

switch (action.type)
{
    case actionTypes.CHANGE_ACTIVE:
        
        return{
            ...state,
            itemActive:action.payload
        }

    case actionTypes.REMOVE_ITEM:
        return{
            ...state,
            list:state.list.filter((item,index)=>index!==action.payload)
        }
    
    case actionTypes.ADD_ITEM:
        
        return{
            ...state,
            list:state.list.concat(action.payload)
        }
    case actionTypes.EDIT_ITEM:
        let listCopy=[...state.list];
        listCopy.splice(action.payload.index,1,action.payload.item)  
      
        return{
            ...state,
            list:listCopy
        }    

}
    return state;
}

export default reducer;
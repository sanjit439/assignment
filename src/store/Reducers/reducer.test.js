import reducer from './reducer'
import * as actionTypes from '../Actions/actionTypes';

describe('Invoice Reducer',()=>{

    it('should return the initial State',()=>
    {
        expect(reducer(undefined,{})).toEqual({
            list:[
                {
                    name:'Carrying-Bag',
                    qty:1,
                    price:1
                }                        
             ],
            itemActive:-1
        })
    });
   
    it('should add item to the list',()=>
    {
        const addAction={
            type:actionTypes.ADD_ITEM,
            payload:{
                name:'soap',
                qty:1,
                price:1
            }
        } 
         expect(reducer({list:[],},addAction))
        .toEqual({list:[addAction.payload]})
    });

    it('should remove item from the list',()=>
    {
        expect(reducer({
            list:[{name:'soap'},{name:'brush'}],        
        },
        {
            type:actionTypes.REMOVE_ITEM,payload:0
        }
        )).toEqual({list:[{name:'brush'}]})
        
    });

    it('should edit item from the list',()=>
    {
        const editAction={
            type:actionTypes.EDIT_ITEM,
            payload:{
                index:0,
                item:{
                    name:'soap',
                    qty:2,
                    price:1
                }
            }
        } 
        expect(reducer({
            list:[{
                name:'soap',
                qty:1,
                price:1
            }],
        },
        editAction
        )).toEqual({list:[editAction.payload.item]})
        
    });

    it('should change active item',()=>{
        const editAction={
            type:actionTypes.CHANGE_ACTIVE,
            payload:1
        } 
        expect(reducer({itemActive:-1},editAction)).toEqual({itemActive:1})
    });

 

})

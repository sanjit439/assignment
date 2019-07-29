import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import InputElement from './InputElement/InputElement'
import {addItem,editItem} from '../../store/Actions'
import ItemFormError from './ItemFormError/ItemFormError'
import './ItemForm.css'

export class ItemForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
          itemInfo:{
            name: '',
            price:'',
            qty:''
          },
          error:'',
       }    
  }

  componentDidMount(){

    const{activeIndex,list}=this.props;
    if(activeIndex!==-1)
    {
        this.setState({
          itemInfo:{
            name: list[activeIndex].name,
            price:list[activeIndex].price,
            qty:list[activeIndex].qty
          }
        })
    }
  }

name=(e)=>
{
  this.setState({
    itemInfo:{
      ...this.state.itemInfo,
      name:e.target.value.trim()
    }
  })
}
price=(e)=>
{
  this.setState({
    itemInfo:{
      ...this.state.itemInfo,
      price:e.target.value
    }
  })
}

quantity=(e)=>
{
  this.setState({
    itemInfo:{
      ...this.state.itemInfo,
      qty:e.target.value
    }
  })
}
submit=(e)=>
{
  
  const {itemInfo}=this.state;
  const {addItem,close,activeIndex,editItem}=this.props;
  const newItem={
    name:itemInfo.name,
    price:itemInfo.price,
    qty:itemInfo.qty

  }
  if(!itemInfo.name || !itemInfo.price || !itemInfo.qty)
  {
    this.setState({error:'All the fields are required' })
  }
  else if(!parseInt(itemInfo.qty,10))
  {
    this.setState({error:'Quantity cannot be zero' })
  }
  else 
  {
    if(activeIndex===-1)
    {
      addItem(newItem);
    } 
    else
    {
      editItem(activeIndex,newItem)
    }   
    close();
  }
  e.preventDefault();
}
  
  render() {
  const {itemInfo,error}=this.state;
    return (
     <form  onSubmit={this.submit} className="item-form">
          <InputElement onHandleChange={this.name} type="text" label="Item Name"  value={ itemInfo.name}/>
          <InputElement onHandleChange={this.quantity} type="number" label="Item Quantity"  value={itemInfo.qty}/>
          <InputElement onHandleChange={this.price} type="number" label="Item Price"  value={itemInfo.price}/>
          {error!=="" && <ItemFormError msg={error}/>}
          <button className="submit-btn" type='submit'>Submit</button>
     </form>
    );
  }
}

const mapDispatchStateToProps=dispatch=>{
  return{
       addItem:(item)=>{dispatch(addItem(item))},
       editItem:(index,item)=>{dispatch(editItem(index,item))}
  }
}
const mapStateToProps=state=>{
  return{
    activeIndex:state.itemActive,
    list:state.list
  }
}


export default connect(mapStateToProps,mapDispatchStateToProps)(ItemForm);

ItemForm.propTypes = {
  list:PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired, 
  addItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  close:PropTypes.func
};


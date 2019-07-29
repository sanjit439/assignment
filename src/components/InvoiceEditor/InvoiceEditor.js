import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ListItems from './ListItems/ListItems';
import OrderTotal from './OrderTotal/OrderTotal'
import ItemForm from '../ItemForm/ItemForm'
import Modal from './Modal/Modal'
import './invoiceEditor.css'
import {removeItem,changeActiveList} from '../../store/Actions';


export class InvoiceEditor extends React.Component {
    constructor(props){
        super(props)
        this.partialTotal=0;
        this.state={
                addItemPopup:false        
        }
  }

  togglePopup=()=>{   
      this.setState({addItemPopup:!this.state.addItemPopup},this.changeActive)
  }
  changeActive=()=>{
    if(this.props.activeIndex!==-1 && this.state.addItemPopup===false)    
    {
        this.props.changeActive(-1)
    }
  }
  
  calculateTax=(sum,rate)=>sum * rate/100;
   
  render() {
    const {addItemPopup}=this.state;
    const{remove,changeActive,list}=this.props;
    this.partialTotal= list.reduce((total,item)=>total+(item.qty*item.price),0);
   
   
    return (
        <div className="invoice-container">
            <ListItems remove={remove} changeActive={changeActive}  togglePopup={this.togglePopup} items={list}/>
            <OrderTotal partialTotal={this.partialTotal} tax={this.calculateTax(this.partialTotal,5)} totalSum={this.totalSum}/>
            {addItemPopup && <Modal close= {this.togglePopup}>
            <ItemForm confirm={this.add} close= {this.togglePopup}/>
            </Modal>}     
        </div>
    );
  }
}

    const mapStateToProps=state=>{
        return{
            list:state.list,  
        }
    }
    const mapDispatchStateToProps=dispatch=>{
        return{
            
            remove:(index)=>dispatch(removeItem(index)),
            changeActive:(index)=>dispatch(changeActiveList(index))

        }
    }

export default connect(mapStateToProps,mapDispatchStateToProps)(InvoiceEditor);


InvoiceEditor.propTypes = {
    list:PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired, 
    changeActive: PropTypes.func.isRequired,
  };
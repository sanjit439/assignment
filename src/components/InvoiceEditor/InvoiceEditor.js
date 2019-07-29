import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ListItems from './ListItems/ListItems';
import OrderTotal from './OrderTotal/OrderTotal'
import ItemForm from '../ItemForm/ItemForm'
import Modal from './Modal/Modal'
import './invoiceEditor.css'
import {removeItem,changeActiveList} from '../../store/Actions';
import {changeToTwoDecPlaces} from '../../utility'

export class InvoiceEditor extends React.Component {
    constructor(props){
        super(props)
        this.partialTotal=0;
        this.tax=0;      
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
  
   
  render() {
    const {addItemPopup}=this.state;
    const{remove,changeActive,list}=this.props;
    this.partialTotal= changeToTwoDecPlaces(list.reduce((total,item)=>total+(item.qty*item.price),0));
    this.tax=changeToTwoDecPlaces(this.partialTotal*0.05);
   
    return (
        <div className="invoice-container">
            <ListItems remove={remove} changeActive={changeActive}  togglePopup={this.togglePopup} items={list}/>
            <OrderTotal partialTotal={this.partialTotal} tax={this.tax} totalSum={this.totalSum}/>
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
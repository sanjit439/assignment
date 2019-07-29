import React from 'react';
import {configure,shallow,} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {ItemForm} from './ItemForm';
import ItemFormError from './ItemFormError/ItemFormError'


configure({adapter:new Adapter()});

describe('<ItemForm>',()=>{
   let wrapper;
    beforeEach(()=>{
         wrapper=shallow  (<ItemForm list={[]} activeIndex={-1} addItem={()=>{}} editItem={()=>{}} />);
    })
    it('should throw an validation error',()=>{
        
         wrapper.setState({ error:"All fields are mandatory" });
         expect(wrapper.find(ItemFormError)).toHaveLength(1);
    })

    it('should not throw validation error',()=>{
       
        wrapper.setState({ error:"" });
        expect(wrapper.find(ItemFormError)).toHaveLength(0);
   })

   it('should throw an validation error',()=>{
       
    const form=wrapper.find('form');
    form.simulate('submit',{ preventDefault() {} });
    expect(wrapper.find(ItemFormError)).toHaveLength(1);
  })

  it('Quantity cannot be zero',()=>{
       
    const form=wrapper.find('form');
    wrapper.setState({ 
        itemInfo:{
            name: 'mobile',
            price:'100',
            qty:'0'
        }
      });
    form.simulate('submit',{ preventDefault() {} });
    expect(wrapper.find(ItemFormError)).toHaveLength(1);
  })
  it('should throw an validation error',()=>{
       
    const form=wrapper.find('form');
    wrapper.setState({ 
        itemInfo:{
            name: '',
            price:'100',
            qty:'10'
        }
      });
    form.simulate('submit',{ preventDefault() {} });
    expect(wrapper.find(ItemFormError)).toHaveLength(1);
  })

 

})
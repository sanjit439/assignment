import React from 'react';
import {configure,shallow,} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {InvoiceEditor} from './InvoiceEditor';
import Modal from './Modal/Modal'


configure({adapter:new Adapter()});

describe('<InvoiceEditor/>',()=>{
    it('Should not show popup',()=>{
        const wrapper=shallow  (<InvoiceEditor list={[]} remove={()=>{}} changeActive={()=>{}}/>);
        expect(wrapper.find(Modal)).toHaveLength(0);
    })

    it('Should  show popup',()=>{
        const wrapper=shallow  (<InvoiceEditor list={[]} remove={()=>{}} changeActive={()=>{}} />);
        wrapper.setState({ addItemPopup:true });
        expect(wrapper.find(Modal)).toHaveLength(1);
    })
})
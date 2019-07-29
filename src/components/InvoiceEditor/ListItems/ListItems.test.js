import React from 'react';
import {configure,shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import ListItems from './ListItems';
import ListEmpty from '../ListEmpty/ListEmpty'


configure({adapter:new Adapter()});



describe('<ListItems/>',()=>{

   
    it('Should render <ListEmpty/> if list is empty',()=>{
        const wrapper=shallow  (<ListItems items={[]} remove={()=>{}} togglePopup={()=>{}}  changeActive={()=>{}} />);
         expect(wrapper.find(ListEmpty)).toHaveLength(1);
    })



    it('Should not render <ListEmpty/> if list is empty',()=>{
        const wrapper=shallow  (<ListItems items={[{}]} remove={()=>{}} togglePopup={()=>{}}  changeActive={()=>{}}/>);
         expect(wrapper.find(ListEmpty)).toHaveLength(0);
    })


})
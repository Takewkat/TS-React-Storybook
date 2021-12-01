import React from 'react';
import { MyContextProvider } from '../InputEmmiter/InputEmmiter';
import  InputList  from "./Input";

export default {
    title: 'Input List'
};

export const ExampleInput = () => {
    return (
        <>
        <MyContextProvider>
            <InputList 
                title='HELOOOOO DUDE' 
                isActive={true}
                icon={'💡'} />       
        
            <InputList 
                title='HELOOOOO BOY' 
                isActive={false}
                icon={'👇'} />        
        
            <InputList 
                title='HELOOOOO MAN' 
                isActive
                mode='success'
                icon={'✍️'} />
        </MyContextProvider>
        </>
    );
};
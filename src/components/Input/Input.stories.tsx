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
                title='HELOOOOO' 
                isActive={true}
                icon={'💡'} />       
        
            <InputList 
                title='HEYYYYY' 
                isActive={false}
                icon={'👇'} />        
        
            <InputList 
                title='HI' 
                isActive
                mode='success'
                icon={'✍️'} />
        </MyContextProvider>
        </>
    );
};

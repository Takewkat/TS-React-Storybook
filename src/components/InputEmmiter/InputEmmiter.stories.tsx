import React from 'react';
import  InputEmmiter, { MyContextProvider }  from "./InputEmmiter";

export default {
    title: 'Input List Emmiter',
    component: InputEmmiter,
};


export const ExampleInputEmmiter = () => {
    return (
        <MyContextProvider>
            <InputEmmiter /> 
        </MyContextProvider>                
        
    );
};


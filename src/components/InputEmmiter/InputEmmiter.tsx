import React from "react";
import { useContext, useState, useMemo } from "react";


const defaultState = {
    setData: (data: string) => {},
    data: '',
}
const MySharedContext = React.createContext(defaultState);
//create context
export const useMyContext = () => useContext(MySharedContext);
//The provider says - subscribe to me, I am the repository, I distribute events
export const MyContextProvider = ({children}: {children: any}) => {
    const [state, setState] = useState<string>('default');

    const value = useMemo(() => {
        return {
            setData: setState,
            data: state,
        };
    }, [state, setState]);
    //closed the logic so that the render does not constantly multiply objects
    return <MySharedContext.Provider value={value}>
        {children}
    </MySharedContext.Provider>
}


const InputEmmiter = () => {
    const {setData, data} = useMyContext();
    const onClick = () => setData('CLICK' + Date.now().toString());
/* extension of logic
    useEffect(() => {
        setData(ref);
        () => clearData(ref);
    }, []);
*/
    return <button onClick={onClick}>CLICK {data}</button>
};

export default InputEmmiter

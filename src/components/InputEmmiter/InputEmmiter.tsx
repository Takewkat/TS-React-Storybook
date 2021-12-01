import React from "react";
import { useContext, useState, useMemo } from "react";


const defaultState = {
    setData: (data: string) => {},
    data: '',
}
const MySharedContext = React.createContext(defaultState);
//создаем контекст
export const useMyContext = () => useContext(MySharedContext);
//Провайдер говорит - подписывайся на меня, я хранилище, я раздаю events
export const MyContextProvider = ({children}: {children: any}) => {
    const [state, setState] = useState<string>('default');

    const value = useMemo(() => {
        return {
            setData: setState,
            data: state,
        };
    }, [state, setState]);
    //замкнули логику, чтобы рендер постоянно не множил объекты
    return <MySharedContext.Provider value={value}>
        {children}
    </MySharedContext.Provider>
}


const InputEmmiter = () => {
    const {setData, data} = useMyContext();
    const onClick = () => setData('CLICK' + Date.now().toString());
/* Расширение логики
    useEffect(() => {
        setData(ref);
        () => clearData(ref);
    }, []);
*/
    return <button onClick={onClick}>CLICK {data}</button>
};

export default InputEmmiter
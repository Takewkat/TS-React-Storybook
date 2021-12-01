import React, { useRef, useEffect} from "react";
import { useMyContext } from "../InputEmmiter/InputEmmiter";
import './Input.css';


//Hook custom
const useBorder = (width: number) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        console.log(ref)
        if (ref.current) {
            ref.current.style.border = `${width}px solid grey`
        }
    }, [ref, width]);

    return [ref];
}

//COMPONENT INPUT
type InputListType = {
    mode?: 'success' | 'negative' | 'warning',
    isActive?: boolean, 
    title?: string,
    children?: any,
    icon: string,
};
const InputList = ({
    mode,     
    isActive, 
    title,
    children, 
    icon, 
    }: InputListType) => {

    const [hookBorder] = useBorder(22);
    const { data } = useMyContext();

    const customTitle = title || data;

    return (
        <div 
            ref={hookBorder}
            className={`input-list
                        input-list--is-active_${isActive}
                        input-list--mode_${mode}`}>
            <div className="input-list__title">{customTitle}</div>
            <div className="input-list__title">{data}</div>
            <div className="input-list__icon">
                <span role="img">{icon}</span>
            </div>
        </div>
    );
};

export default InputList;


import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from 'react-icons/go';
import Panel from "./Panels";

function Dropdown( { options, value, onChange } ) {

    const [ isOpen, setIsOpen ] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            //console.log(divEl.current);

            if(!divEl.current){
                return;
            }

            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };

    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        //CLOSE DROPDOWN
        setIsOpen(false);

        //WHAT OPTION DID THE USER CLICK ON?
        console.log(option);
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={ () => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        );
    });
    
    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" 
            onClick={handleClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && (
                <Panel class="absolute top-full border">
                    {renderedOptions}
                </Panel>
            )}
        </div>
    );
}

export default Dropdown;

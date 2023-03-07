import { useState } from "react";



function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(1);

    const renderedItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex;

        if(isExpanded){
            console.log('Is Expanded');
        }else{
            console.log('Is Collapsed');
        }

        return (
            <div key={item.id}>
                <div>{item.label}</div>
              {isExpanded && <div>{item.content}</div>}  
            </div>
        );
    });

    return <div>{renderedItems}</div>;

}

export default Accordion;
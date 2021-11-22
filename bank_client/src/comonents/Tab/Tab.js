import React from 'react';
import '../Tab/tab.css'

const Tab = ({text, setState, isActive, index}) => {
    return (
        <div className={`tab ${isActive === true ? 'tab_active' : ''}`} onClick={setState}>
            <p data-index={index}>{text}</p>
        </div>
    )
}
export {Tab}
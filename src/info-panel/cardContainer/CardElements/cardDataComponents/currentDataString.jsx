import React from "react";

export default function CurrentDataString (props) {
    return (
        
        <div className="currentDataContainer__humidity card__line">
            <div className="fieldName">{props.name}</div>  
            <div className="fieldName">{props.data}{props.symbol}</div>  
        </div>
    )
}
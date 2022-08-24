import React from "react";

export default function CurrentTemp (props) {
    return (
        <div className="currentDataContainer__temp">{Math.round(props.state.temp-273)}&deg;</div>
    )
}
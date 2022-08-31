import React from "react";

export default function CurrentTemp (props) {
    if (props.cardType === 'current'){
        return (
            <div className="currentDataContainer__temp">{Math.round(props.state.temp-273)}&deg;</div>
        )
    } else if (props.cardType === 'hourly'){
        return (
            <div className="smallFontSize__temp">{Math.round(props.state.temp-273)}&deg;</div>
        )
    } else {
        let dayTemp = Math.round(props.state.temp.day-273);
        let nightTemp = Math.round(props.state.temp.night-273);
        /* let stringToPrint = `${dayTemp}&deg;/${nightTemp}&deg;` */
        return (
            <div className="smallFontSize__temp">{dayTemp}&deg; / {nightTemp} &deg;</div>
        )
    }

}
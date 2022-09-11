import React from "react";
import CurrentDataString from "./currentDataString";

export default function AdditionalInfo (props) {
    return (
        <div className="additionalInfo">
            <CurrentDataString name = 'Влажность' data = {props.state.humidity} symbol = '&#37;'/> 
            <CurrentDataString name = 'Давление' data = {Math.round(props.state.pressure*0.750063755419211)} symbol = 'мм. рт.ст.'/>
            
            <CurrentDataString name = 'УФ-индекс' data = {props.state.uvi}/>
            <CurrentDataString name = 'Скорость ветра' data = {props.state.wind_speed} symbol = 'м.с'/>
        </div>
    )
}
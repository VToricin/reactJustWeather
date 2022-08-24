import React from "react";
import IconCreate from "./Icon";
import CurrentTemp from "../cardDataComponents/currentTemp";

export default function ShortCardInfo (props) {
    

    return (
        <div className="shortCardInfo">
            <IconCreate state = {props.state.weather[0].icon}/>
            <CurrentTemp state = {props.state}/>
        </div>
    )
}
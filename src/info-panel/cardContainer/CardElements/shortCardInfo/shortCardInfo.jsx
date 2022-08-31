import React from "react";
import IconCreate from "./shortCardElements/Icon";
import CurrentTemp from "../cardDataComponents/currentTemp";
import CardName from "./shortCardElements/cardName";

export default function ShortCardInfo (props) {
    

    return (
        <div className="shortCardInfo">
            <CardName cardType = {props.cardType} timeOffset = {props.timeOffset} cardID = {props.cardID}/>
            <IconCreate state = {props.state.weather[0].icon} cardType = {props.cardType}/>
            <CurrentTemp state = {props.state} cardType = {props.cardType}/>
        </div>
    )
}
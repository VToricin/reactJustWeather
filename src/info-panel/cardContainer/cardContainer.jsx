import React from "react";
import CurrentDataString from "./CardElements/cardDataComponents/currentDataString";
import ShortCardInfo from "./CardElements/shortCardInfo/shortCardInfo";

export default function CardContainer  (props)  {

    switch(props.cardType){
        case "current":
            return(
        
                <div className="currentDataContainer">
                    <ShortCardInfo state = {props.state} cardType = {"current"} timeOffset = {props.timeOffset} cardID = {props.cardID}/>
                    <CurrentDataString name='Влажность,' data = {props.state.humidity} symbol = '&#37;'/> 
                    <CurrentDataString name='Давление,' data = {Math.round(props.state.pressure*0.750063755419211)} symbol = 'мм. рт.ст.'/>
                </div>
            
        )
        case "hourly":
            return(
        
                <div className="cardContainer">
                    
                    <ShortCardInfo state = {props.state} cardType = {"hourly"} timeOffset = {props.timeOffset} cardID = {props.cardID}/>
                    <CurrentDataString name='Влажность,' data = {props.state.humidity} symbol = '&#37;'/> 
                    <CurrentDataString name='Давление,' data = {Math.round(props.state.pressure*0.750063755419211)} symbol = 'мм. рт.ст.'/>
                </div>
            
        )
        case "daily":
            return(
        
                <div className="cardContainer">
                    <ShortCardInfo state = {props.state} cardType = {"daily"} timeOffset = {props.timeOffset} cardID = {props.cardID}/>
                    <CurrentDataString name='Влажность,' data = {props.state.humidity} symbol = '&#37;'/> 
                    <CurrentDataString name='Давление,' data = {Math.round(props.state.pressure*0.750063755419211)} symbol = 'мм. рт.ст.'/>
                </div>
            
        )
    }

    
}
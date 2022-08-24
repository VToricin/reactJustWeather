import React from "react";
import CurrentDataString from "./cardDataComponents/currentDataString";
import ShortCardInfo from "./CardElements/shortCardInfo";

export default function CardContainer  (props)  {

    switch(props.cardType){
        case "current":
            return(
        
                <div className="currentDataContainer">
                    <ShortCardInfo state = {props.state}/>
                    <CurrentDataString name='Влажность,' data = {props.state.humidity} symbol = '&#37;'/> 
                    <CurrentDataString name='Давление,' data = {Math.round(props.state.pressure*0.750063755419211)} symbol = 'мм. рт.ст.'/>
                </div>
            
        )
        case "hourly":
            return(
        
                <div className="cardContainer">
                    
                    <div className="cardContainer__temp card__line">{Math.round(props.state.temp-273)}</div>
                    <CurrentDataString name='Влажность,' data = {props.state.humidity} symbol = '&#37;'/> 
                    <CurrentDataString name='Давление,' data = {Math.round(props.state.pressure*0.750063755419211)} symbol = 'мм. рт.ст.'/>
                </div>
            
        )
        case "daily":
            return(
        
                <div className="cardContainer">
                    <div className="cardContainer__temp card__line">{Math.round(props.state.temp-273)}</div>
                    <CurrentDataString name='Влажность,' data = {props.state.humidity} symbol = '&#37;'/> 
                    <CurrentDataString name='Давление,' data = {Math.round(props.state.pressure*0.750063755419211)} symbol = 'мм. рт.ст.'/>
                </div>
            
        )
    }

    
}
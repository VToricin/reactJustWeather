import React from "react";
import CurrentDataString from "./CardElements/cardDataComponents/currentDataString";
import ShortCardInfo from "./CardElements/shortCardInfo/shortCardInfo";
import { useState } from "react";
import AdditionalInfo from "./CardElements/cardDataComponents/additionalInfo";


export default function CardContainer  (props)  {

    const [MobileCardHeight, setMobileCardHeight] = useState("MobileCardHeightClosed");

    let cardHeigthExtend = () =>{
        console.log('open');
        setMobileCardHeight(()=>{
            
            if (MobileCardHeight === "MobileCardHeightClosed") {
                return "MobileCardHeightOpened";
            } else {
                return "MobileCardHeightClosed";
            }
        })
    }


    switch(props.cardType){
        case "current":
            return(
        
                <div className="currentDataContainer" >
                    <ShortCardInfo state = {props.state} cardType = {"current"} timeOffset = {props.timeOffset} cardID = {props.cardID} cardHeigthExtend = {cardHeigthExtend}/>
                    <CurrentDataString name='Ощущается как' data = {Math.round(props.state.temp-273)} symbol = '&deg;'/> 
                    <CurrentDataString name = 'Скорость ветра' data = {props.state.wind_speed} symbol = 'м.с'/>
                    <CurrentDataString name = 'Влажность' data = {props.state.humidity} symbol = '&#37;'/>
                </div>
            
        )
        case "hourly":
            return(
        
                <div className={`cardContainer ${MobileCardHeight}`} >
                    
                    <ShortCardInfo state = {props.state} cardType = {"hourly"} timeOffset = {props.timeOffset} cardID = {props.cardID} cardHeigthExtend = {cardHeigthExtend}/>
                    
                    <AdditionalInfo state = {props.state}></AdditionalInfo>
                    
                    
                </div>
            
        )
        case "daily":
            return(
        
                <div className={`cardContainer ${MobileCardHeight}`} >
                    <ShortCardInfo state = {props.state} cardType = {"daily"} timeOffset = {props.timeOffset} cardID = {props.cardID} cardHeigthExtend = {cardHeigthExtend}/>
                    <AdditionalInfo state = {props.state}></AdditionalInfo>
                </div>
            
        )
    }

    
}
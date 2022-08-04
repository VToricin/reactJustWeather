import React from "react";

export default function CardContainer  (props)  {

    switch(props.cardType){
        case "current":
            return(
        
                <div className="cardContainer">
                    <div className="cardContainer__temp card__line">{Math.round(props.state.temp-273)}</div>
                    <div className="cardContainer__humidity card__line">{props.state.humidity}</div>
                    <div className="cardContainer__pressure card__line">{Math.round(props.state.pressure*0.750063755419211)}</div>
                </div>
            
        )
        case "hourly":
            return(
        
                <div className="cardContainer">
                    <div className="cardContainer__temp card__line">{Math.round(props.state.temp-273)}</div>
                    <div className="cardContainer__humidity card__line">{props.state.humidity}</div>
                    <div className="cardContainer__pressure card__line">{Math.round(props.state.pressure*0.750063755419211)}</div>
                </div>
            
        )
        case "daily":
            return(
        
                <div className="cardContainer">
                    <div className="cardContainer__temp card__line">{Math.round(props.state.temp-273)}</div>
                    <div className="cardContainer__humidity card__line">{props.state.humidity}</div>
                    <div className="cardContainer__pressure card__line">{Math.round(props.state.pressure*0.750063755419211)}</div>
                </div>
            
        )
    }

    
}
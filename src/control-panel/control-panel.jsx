import React from "react";
import LocationSearch from "./location-search/location-search";
import { RenderTypeButton } from "./RenderTypeButton/render-type-button";
import CardContainer from "../info-panel/cardContainer/cardContainer";

export default function ControlPanel (props){
    let currentCords = props.state.currentCords;
    console.log(props.state.renderType)
    
    return(
        <div className="controlPanel">
            
            <CardContainer state = {props.state[currentCords].current} cardType = "current"/>
            {RenderTypeButton (props.state.renderType)}
            <LocationSearch />
            
        </div>
    )
}
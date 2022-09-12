import React from "react";
import LocationSearch from "./location-search/location-search";
import { RenderTypeButton } from "./RenderTypeButton/render-type-button";
import CardContainer from "../info-panel/cardContainer/cardContainer";
import NoLocation from "../info-panel/loading/noLocation";


export default function ControlPanel (props){
    let currentCords = props.state.currentCords;
    console.log(props.state)

    let controlPanelBuild = () => {
        if (currentCords === "!") {
            return (
                <>
                    <NoLocation/>
                    <LocationSearch />
                </>
            )
            
        } else {
            return (
            
                <>
                    <CardContainer state = {props.state[currentCords].current} cardType = "current"/>
                    {RenderTypeButton (props.state.renderType)}
                    <LocationSearch />
                </>
            )
        }
    }
    
    return(
        <div className="controlPanel">
            
            {controlPanelBuild()}
          
        </div>
    )
}
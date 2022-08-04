import React from "react";
import  CardContainer  from "./cardContainer/cardContainer";
import Waiting from "./waiting/waiting";


export default function InfoPanel (props) {
    console.log(props.state);
    let currentCords = props.state.currentCords;
    let hourlyObject = props.state[currentCords].hourly;
    hourlyObject.length = 12;
    let dailyObject = props.state[currentCords].daily;

    if (hourlyObject===undefined){
        return (
            <Waiting/>
        )
    }else{

    if (props.state.renderType === true){
                return (
                    <div className="infoPanel">
                        <div className="cardSlider">
                            <div className="cardSlider__cardWrapper">
                                
                                {hourlyObject.map(el=><CardContainer state = {el} cardType = "hourly"/>)}
                                
                            </div>
                        </div>
                    </div>
                )
    }else{
        return (
            <div className="infoPanel">
                <div className="cardSlider">
                    <div className="cardSlider__cardWrapper">
                        
                        {dailyObject.map(el=><CardContainer state = {el} cardType = "daily"/>)}
            
                    </div>
                </div>
            </div>
        )
    }  
        
        
        
    }    
}
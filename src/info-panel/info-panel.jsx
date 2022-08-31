import React from "react";
import { useState } from "react";
import CardContainer  from "./cardContainer/cardContainer";
import Waiting from "./waiting/waiting";


export default function InfoPanel (props) {
    
    console.log(props.state);
    let currentCords = props.state.currentCords;
    let hourlyObject = props.state[currentCords].hourly;
    hourlyObject.length = 12;
    let dailyObject = props.state[currentCords].daily;
    let cardWrapper = React.createRef();
    let timeOffset = props.state[currentCords].timezone_offset;
    console.log(timeOffset)
    const [offsetH, setOffsetH] = useState(0); //offset X for hourly data
    const [offsetD, setOffsetD] = useState(0); //offset X for daily data

    let sliderScroller = (sliderOffset, type) => {
         if (type === "H"){           
            setOffsetH(() => {
                const newOne = offsetH - sliderOffset;
                console.log(newOne)
                return newOne;
            })
         }else{   
            setOffsetD(() => {
                const newOne = offsetD - sliderOffset;
                console.log(newOne)
                return newOne;
            })
        }   
    }



    if (hourlyObject === undefined){
        return (
            <Waiting/>
        )
    }else{

    if (props.state.renderType === true){
                return (
                    <div className = "infoPanel">
                        <div className = "cardSlider">
                            
                                <div ref = {cardWrapper} className="cardSlider__cardWrapper" style = {{transform: `translateX(${offsetH}px)`}}>
                                    
                                    {hourlyObject.map(el => <CardContainer state = {el} cardType = {"hourly"} timeOffset = {timeOffset} cardID = {hourlyObject.indexOf(el)}/>)}
                                    
                                </div>
                            <div className = "cardSlider__prevButton slideButton" onClick = {() => {sliderScroller(-300, "H")}}>{"<"}</div>
                            <div className = "cardSlider__nextButton slideButton" onClick = {() => {sliderScroller(300, "H")}}>{">"}</div>
                        </div>
                    </div>
                )
    }else{
        return (
            <div className = "infoPanel">
                <div className = "cardSlider">
                    <div className = "cardSlider__cardWrapper " style = {{transform: `translateX(${offsetD}px)`}}>
                        
                        {dailyObject.map(el => <CardContainer state = {el} cardType = {"daily"} timeOffset = {timeOffset} cardID = {dailyObject.indexOf(el)}/>)}
            
                    </div>
                    <div className = "cardSlider__prevButton slideButton" onClick = {() => {sliderScroller(-300, "D")}}>{"<"}</div>
                    <div className = "cardSlider__nextButton slideButton" onClick = {() => {sliderScroller(300, "D")}}>{">"}</div>
                </div>
            </div>
        )
    }  
        
        
        
    }    
}
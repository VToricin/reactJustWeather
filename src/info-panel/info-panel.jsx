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
    console.log(timeOffset);
    
    const [offsetH, setOffsetH] = useState(0); //offset X for hourly data
    /* const [offsetD, setOffsetD] = useState(0); //offset X for daily data */
    
    let sliderScroller = (sliderOffset, type) => {
        if (offsetH<=0){
            /* if (type === "H"){ */           
                setOffsetH(() => {
                    let newOne = offsetH - sliderOffset;
                        if(newOne>0){
                            console.log(newOne)
                            newOne = 0;
                        }
                    return newOne;
                    
                    
                })
            
                /* }else{   
                setOffsetD(() => {
                    const newOne = offsetD - sliderOffset;
                    console.log(newOne)
                    return newOne;
                })
            } */   
        }
    }    

    let contentBuilder = () => {
       
        if (props.state.renderType === true){
            
            return hourlyObject.map(el => <CardContainer state = {el} cardType = {"hourly"} timeOffset = {timeOffset} cardID = {hourlyObject.indexOf(el)}/>)
        } else {
            
            return dailyObject.map(el => <CardContainer state = {el} cardType = {"daily"} timeOffset = {timeOffset} cardID = {dailyObject.indexOf(el)}/>)
        }
    }




    if (hourlyObject === undefined){
        return (
            <Waiting/>
        )
    }else{

    
                return (
                    <div className = "infoPanel">
                        <div className = "cardSlider">
                            
                                <div ref = {cardWrapper} className="cardSlider__cardWrapper" style = {{transform: `translateX(${offsetH}px)`}}>
                                    
                                    {contentBuilder()}
                                    
                                </div>
                            <div className = "cardSlider__prevButton slideButton" onClick = {() => {sliderScroller(-300, "H")}}>{"<"}</div>
                            <div className = "cardSlider__nextButton slideButton" onClick = {() => {sliderScroller(300, "H")}}>{">"}</div>
                        </div>
                    </div>
                )
    /* else{
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
    }   */
        
        
        
    }    
}
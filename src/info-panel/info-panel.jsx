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
    const [offset, setOffset] = useState(0);


    let sliderScroller = () => {
         console.log(0 - 490)           
         setOffset(()=>{
            const newOne = 0 - 450;
            console.log(newOne)
            return newOne;
         })

    }



    if (hourlyObject===undefined){
        return (
            <Waiting/>
        )
    }else{

    if (props.state.renderType === true){
                return (
                    <div className="infoPanel">
                        <div className="cardSlider">
                            
                                <div ref = {cardWrapper} className="cardSlider__cardWrapper" style={{transform: `translateX(${offset}px)`}}>
                                    
                                    {hourlyObject.map(el=><CardContainer state = {el} cardType = "hourly"/>)}
                                    
                                </div>
                            <div className="cardSlider__prevButton slideButton" onClick = {()=>{sliderScroller(300)}}></div>
                            <div className="cardSlider__nextButton slideButton" onClick = {()=>{console.log('next')}}></div>
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
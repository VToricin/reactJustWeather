import React from "react";
import { useState } from "react";

export default function AdditionalInfoButton (props) {
    let LeftDotCoordObj = {
        left: "25%",
        width: "3px",
        top: "45%"
    }
    let RightDotCoordObj = {
        left: "65%",
        width: "3px",
        top: "45%"
    }
    
    let [LeftDotCoord, setLeftDotCoord] = useState(LeftDotCoordObj);
    let [RightDotCoord, setRightDotCoord] = useState(RightDotCoordObj);

    let onClickHandler = () => {
        props.cardHeigthExtend();
        setLeftDotCoord(()=>{
           // debugger;
            if (LeftDotCoord.left === "25%"){
                return (
                     {
                        left: "45%",
                        width: "10px",
                        top: "5.2px"
                    }
                )
            } else {
               // debugger;
                    return (
                         {
                            left: "25%",
                            width: "3px",
                            top: "45%"
                        }
                    )

                    
                }
                
        })

        setRightDotCoord(()=>{
            // debugger;
             if (RightDotCoord.left === "65%"){
                 return (
                      {
                         left: "45%",
                         width: "10px",
                         top: "5.2px"
                     }
                 )
             } else {
                // debugger;
                     return (
                          {
                             left: "65%",
                             width: "3px",
                             top: "45%"
                         }
                     )
 
                     
                 }
                 
         })



    }
    

    
    return (
        <div className="fullCardInfoOpen" onClick={onClickHandler}>
            <div className="fullCardButton">
                <div className="dotDiv dotDiv__left" style={{height:LeftDotCoord.width, left:LeftDotCoord.left, top:LeftDotCoord.top}}></div>
                <div className="dotDiv dotDiv__mid"></div>
                <div className="dotDiv dotDiv__right" style={{height:RightDotCoord.width, left:RightDotCoord.left, top:RightDotCoord.top}}></div>
            </div>
        </div>
    )
}
import React from "react";
export default function CardName (props) {
    if (props.cardType === "current"){
        return (
            <div className="CardName">
                Сейчас
            </div>
        );
    } else {

        let timeNow = new Date();
        
         if (props.cardType === "hourly"){
           
            timeNow.setHours(timeNow.getUTCHours() + ((props.timeOffset/60)/60) + props.cardID + 1);
            timeNow = timeNow.getHours();
            let timeNowString = `${timeNow}`;
            console.log(timeNow)
            
                return (
                    <div className="shortCardInfo__data CardName">
                         {timeNowString}:00
                    </div>
                );
         } else {
            
            timeNow.setDate(timeNow.getDate() + props.cardID);
            
            

            let options = {
                
                month: 'short',
                day: 'numeric',
                weekday: 'short'
              };

            
                return (
                    <div className="shortCardInfo__data CardName">
                        {timeNow.toLocaleString("ru", options)}
                    </div>
                );
         } 
  }
}
import React from "react";
import icon01d from "../../../../../images/01d.png";
import icon01n from "../../../../../images/01n.png";
import icon02d from "../../../../../images/02d.png";
import icon02n from "../../../../../images/02n.png";
import icon03d from "../../../../../images/03d.png";
import icon03n from "../../../../../images/03n.png";
import icon04d from "../../../../../images/04d.png";
import icon04n from "../../../../../images/04n.png";
import icon09d from "../../../../../images/09d.png";
import icon09n from "../../../../../images/09n.png";
import icon10d from "../../../../../images/10d.png";
import icon10n from "../../../../../images/10n.png";
import icon11d from "../../../../../images/11d.png";
import icon11n from "../../../../../images/11n.png";
import icon13d from "../../../../../images/13d.png";
import icon13n from "../../../../../images/13n.png";
import icon50d from "../../../../../images/50d.png";
import icon50n from "../../../../../images/50n.png";

export default function IconCreate (props) {
    let iconToReturn = 0;
    
     switch(props.state){
        case "01d":
            iconToReturn = icon01d;
            break;   
        case "01n":
            iconToReturn = icon01n;
            break;
        case "02d":    
            iconToReturn = icon02d;
            break;
        case "02n":    
            iconToReturn = icon02n;
            break;
        case "03d":    
            iconToReturn = icon03d;
            break;
        case "03n":    
            iconToReturn = icon03n;
            break;           
        case "04d":    
            iconToReturn = icon04d;
            break;
        case "04n":    
            iconToReturn = icon04n;
            break;     
        case "09d":    
            iconToReturn = icon09d;
            break;
        case "09n":    
            iconToReturn = icon09n;
            break;
        case "10d":    
            iconToReturn = icon10d;
            break;
        case "10n":    
            iconToReturn = icon10n;
            break;        
        
        case "11d":    
            iconToReturn = icon11d;
            break;
        case "11n":    
            iconToReturn = icon11n;
            break;
    

        case "13d":    
            iconToReturn = icon13d;
            break;
        case "13n":    
            iconToReturn = icon13n;
            break;
        case "50d":    
            iconToReturn = icon50d;
            break;
        case "50n":    
            iconToReturn = icon50n;
            break;
        default :
            iconToReturn = icon01d;    
        
        }

    
    if  (props.cardType === "current"){   
        return (<img src={iconToReturn} alt="" />)
    } else {
        return (<img src={iconToReturn} alt="" className="smallIcon"/>)
    }
            
        
        
    
}
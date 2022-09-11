import React from "react";
import { useState } from "react";
import CardContainer  from "./cardContainer/cardContainer";





export default function InfoPanel (props) {
    
    
    let currentCords = props.state.currentCords;  
    let hourlyObject = props.state[currentCords].hourly; // выборка данных по данным координатам по часам
    hourlyObject.length = 24;  // определение количества карточек для выборки "по часам"
    let dailyObject = props.state[currentCords].daily;  // выборка данных по данным координатам по дням
    let cardWrapper = React.createRef();  // ссылка на родительский контейнер для карточек с данными 
    
    let timeOffset = props.state[currentCords].timezone_offset; // часовой пояс точки, координаты которой фетчатся
    
    
    const [offsetH, setOffsetH] = useState(0); //юз-стейт для слайдера с карточками при десктопной отрисовке 
    
    
    
    let sliderScroller = (sliderOffset, type) => {   // функция для определения сдвига окна с информацией при нажатии кнопок слайдера
        if (offsetH<=0){
                      
                setOffsetH(() => {
                    let newOne = offsetH - sliderOffset;
                    let cardWrapperScreenParams = cardWrapper.current.getBoundingClientRect();
                    let WrapperMaxWidth = 0;
                    function WrapperMaxWidthCounter () {
                        if(type === true) {
                            WrapperMaxWidth = cardWrapperScreenParams.width - (hourlyObject.length * 320);
                           // debugger;
                        } else {
                            WrapperMaxWidth = cardWrapperScreenParams.width - (dailyObject.length * 320);
                        }
                    }

                    WrapperMaxWidthCounter();
                   
                        if(newOne>0){
                            newOne = 0;
                        }

                        else if (newOne<WrapperMaxWidth) {
                            newOne = WrapperMaxWidth;
                        }
                        
                    return newOne;
                    
                    
                })
            
                  
        }
    }    

    let contentBuilder = () => { // функция выбора набора карточек дневных или часовых в зависимости от параметров в стейте
       
        if (props.state.renderType === true){
            
            return hourlyObject.map(el => <CardContainer state = {el} cardType = {"hourly"} timeOffset = {timeOffset} cardID = {hourlyObject.indexOf(el)}/>)
        } else {
            
            return dailyObject.map(el => <CardContainer state = {el} cardType = {"daily"} timeOffset = {timeOffset} cardID = {dailyObject.indexOf(el)}/>)
        }
    }




   

    
                return ( // построение интерфейса инфопанели
                    <div className = "infoPanel">
                        <div className = "cardSlider">
                            
                                <div ref = {cardWrapper} className="cardSlider__cardWrapper" style = {{transform: `translateX(${offsetH}px)`}}>
                                    
                                    {contentBuilder()}
                                    
                                </div>
                            <div className = "cardSlider__prevButton slideButton" onClick = {() => {sliderScroller(-450, props.state.renderType)}}>{"<"}</div>
                            <div className = "cardSlider__nextButton slideButton" onClick = {() => {sliderScroller(450, props.state.renderType)}}>{">"}</div>
                        </div>
                    </div>
                )
    
        
        
        
      
}
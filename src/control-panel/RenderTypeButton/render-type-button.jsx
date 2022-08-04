import React from "react";
import { renderSwitcher } from "../../state/state";

export let RenderTypeButton = (argu) => {
    let buttontext = "";
    if (argu === true){
        buttontext = 'Прогноз на неделю';
    } else {
        buttontext = 'Прогноз на день';
    }

    return (
        <div className="renderTypeButton" onClick={renderSwitcher} >
            {buttontext}
        </div>
    )
}
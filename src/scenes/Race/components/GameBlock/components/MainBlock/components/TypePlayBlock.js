import React from 'react';
import InputTextBlock from "./InputTextBlock";

const TypePlayBlock = () => {
    return (
        <div id="typeplayblock">

            <div id="fontsize_cont"
                 style={{fontFamily: "Tahoma", fontSize: "17px", lineHeight: "1.2em"}}>
                <div id="typetext"
                     style={{opacity: "0.5", display: "none"}}
                     className="full">
                    &nbsp;
                </div>

                <div id="hiddentext">
                    Текст скрыт до начала
                    игры
                </div>
            </div>

            <InputTextBlock />
        </div>
    );
}

export default TypePlayBlock;
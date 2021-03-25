import React from 'react';

const InputTextBlock = () => {
    return (
        <div style={{position: "relative"}}
             id="inputtextblock">
            <div id="fixtypo"
                 style={{display: "none"}}>Исправьте
                опечатку!
            </div>
            <input type="text"
                   tabIndex="1"
                   className="disabled"
                   name="sometext"
                   id="inputtext"
                   disabled=""
                   autoComplete="off"
                   value="Набирайте здесь текст после начала игры"
                   onChange={() => {
                   }}
                   style={{fontFamily: "Tahoma", fontSize: "17.5px"}}/>
            <div id="entertip"
                 style={{
                     color: "#999",
                     fontSize: "12px",
                     textAlign: "center",
                     marginTop: "10px",
                     display: "none"
                 }}>
                По
                окончании набора
                нажмите
                клавишу Enter
            </div>
        </div>
    );
}

export default InputTextBlock;

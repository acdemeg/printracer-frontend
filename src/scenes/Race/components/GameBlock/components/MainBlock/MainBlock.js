import React from 'react';
import Report from "./components/Report";
import TypeBlock from "./components/TypeBlock";

const MainBlock = () => {
    return (
        <div className="gameblock" id="main-block"
             style={{position: "relative"}}>
            <TypeBlock />
            <div id="errors_text" className="errors_text"
                 style={{display: "none"}}>

            </div>
            <Report />
            <div id="errorwork" style={{display: "none"}}>
                <a href="">Работа над
                    ошибками</a>
            </div>

            <div id="errors_tab" style={{display: "none"}}><a>Посмотреть
                ошибки</a></div>
            <div style={{clear: "left", height: "1px"}}/>
        </div>
    );

}

export default MainBlock;
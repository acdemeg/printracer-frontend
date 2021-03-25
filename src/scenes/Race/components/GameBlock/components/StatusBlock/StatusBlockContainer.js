import React from 'react';
import StatusBlock from "./components/StatusBlock";

const StatusBlockContainer = () => {
    return (
        <div className="gameblock" id="status-block"
             style={{position: "relative"}}>
            <div className="handle">
                <img src="/public/images/blank.gif" alt=""/>
            </div>

            <div id="speedpanel">
                <canvas width="262" height="91" id="speedpanel-canvas"/>
                <div id="speed-label"/>
                <div id="errors-label"/>
                <img id="speedpanel-back"  alt="speedpanel-back"
                     src="/public/images/panel800.gif"
                     style={{position: "absolute", left: "-1000px"}}/>
                <img id="speedpanel-top" alt="speedpanel-top"
                     src="/public/images/speedpanel_top.png"
                     style={{position: "absolute", left: "-1000px"}}/>
                <img id="speedpanel-arrow" alt="speedpanel-arrow"
                     src="/public/images/speedpanel_arrow.png"
                     style={{position: "absolute", left: "-1000px"}}/>
                     <StatusBlock />
            </div>
        </div>
    );

}

export default StatusBlockContainer;

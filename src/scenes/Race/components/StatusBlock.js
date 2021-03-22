import React from 'react';

const StatusBlock = () => {
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
                <img id="speedpanel-back" src="/public/images/panel800.gif"
                     style={{position: "absolute", left: "-1000px"}}/>
                <img id="speedpanel-top"
                     src="/public/images/speedpanel_top.png"
                     style={{position: "absolute", left: "-1000px"}}/>
                <img id="speedpanel-arrow"
                     src="/public/images/speedpanel_arrow.png"
                     style={{position: "absolute", left: "-1000px"}}/>

                <div id="status" className="ready">
                    <table>
                        <tbody>
                        <tr>
                            <td rowSpan="2"
                                className="gametype-sign-wrapper">
                                <i className="gametype-sign sign-normal active">
                                </i></td>
                            <td id="gamedesc"><span
                                className="gametype-normal">Обычный</span>,
                                одиночный заезд,
                                таймаут&nbsp;30&nbsp;сек
                            </td>
                        </tr>
                        <tr>
                            <td id="status-inner">
                                <div id="waiting">
                                    Старт через&nbsp;&nbsp;
                                    <span
                                        className="bitmore"
                                        id="waiting_timeout">00:03</span>
                                </div>
                                <div id="racing"
                                     style={{display: "none"}}>
                                                                                                <span className="bitmore"
                                                                                                      id="racing_time">&nbsp;</span>
                                </div>
                                <div id="paused"
                                     style={{display: "none"}}>
                                    Ожидание других
                                    игроков...
                                    <a href=""
                                       id="host_start"
                                       style={{display: "none"}}
                                    >Начать
                                        игру</a>
                                </div>
                                <div id="finished"
                                     style={{display: "none"}}>
                                    Игра окончена
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default StatusBlock;
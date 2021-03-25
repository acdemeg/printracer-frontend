import React from 'react';

const StatusBlock = () => {
    return (
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
    );

}

export default StatusBlock;

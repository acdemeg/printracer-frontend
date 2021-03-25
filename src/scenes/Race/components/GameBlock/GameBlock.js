import React from 'react';
import StatusBlockContainer from "./components/StatusBlock/StatusBlockContainer";
import MainBlock from "./components/MainBlock/MainBlock";
import PlayersBlockContainer from "./components/PlayersBlock/PlayersBlockContainer";

const GameBlock = () => {
    return (
        <div id="play-overall">
            <table cellSpacing="0" cellPadding="0">
                <tbody>
                <tr>
                    <td align="center">
                        <div id="gameloading" style={{display: "none"}}>

                            <div className="r tl">
                                <div className="tr">
                                    <div className="bl">
                                        <div className="br">
                                            <div className="rc">
                                                <div className="gameloading-content">
                                                    Загрузка...
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="sortable">
                            <StatusBlockContainer/>
                            <MainBlock/>
                            <PlayersBlockContainer/>
                            <div className="gameblock" id="chat-block"
                                 style={{position: "relative"}}>
                        </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );

}

export default GameBlock;

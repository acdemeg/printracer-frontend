import React from 'react';
import StatusBlock from "./StatusBlock";
import MainBlock from "./MainBlock";
import PlayersBlock from "./PlayersBlock";

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

                            <div id="sortable">
                                <StatusBlock/>
                                <MainBlock/>
                                <PlayersBlock/>
                                <div className="gameblock" id="chat-block"
                                     style={{position: "relative"}}/>
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
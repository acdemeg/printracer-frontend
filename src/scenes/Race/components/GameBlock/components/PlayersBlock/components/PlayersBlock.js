import React from 'react';
import RecordBlock from "./RecordBlock";
import NameBlock from "./NameBlock";
import CarBlock from "./CarBlock";

const PlayersBlock = () => {
    return (
        <div id="players" className="ng-scope">
            <div className="player you ng-scope" id="player0">
                <RecordBlock />
                <div className="rating" id="rating0"
                     style={{display: "none"}}/>
                <div id="rating_loading"
                     style={{display: "none"}}>Результат засчитан.
                    Подождите...
                </div>
                <table className="car" id="car0">
                    <tbody>
                    <tr>
                        <td className="name">
                            <NameBlock />
                        </td>
                        <td>
                            <CarBlock />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="divider">
                    <img src="/public/images/blank.gif"/>
                </div>
            </div>
        </div>
    );
}

export default PlayersBlock;
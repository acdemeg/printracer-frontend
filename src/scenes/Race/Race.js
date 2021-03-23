import React from 'react';
import SettingsBlock from "./components/GameBlock/components/SettingsBlock";
import GameBlock from "./components/GameBlock/GameBlock";
import "./Race.scss"

const Race = () => {
    return (
        <div id="content" className="minwidth">
            <div className="minwidth_holyhack">
                <div className="minwidth_container">
                    <div className="play-wrapper">
                        <table className="play-overall-table">
                            <tbody>
                            <tr>
                                <td>
                                    <GameBlock/>
                                </td>
                                <td>
                                    <SettingsBlock/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Race;





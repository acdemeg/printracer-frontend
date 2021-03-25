import React from 'react';
import PeopleBottomBlock from "./components/PeopleBottomBlock";
import PeopleTopBlock from "./components/PeopleTopBlock";
import PlayersBlock from "./components/PlayersBlock";

const PlayersBlockContainer = () => {
    return (
        <div className="gameblock" id="players-block"
             style={{position: "relative"}}>
            <div className="handle">
                <img src="/public/images/blank.gif" alt="blank"/>
            </div>
            <div id="players-count-lbl">
                <span>1 участник</span>
            </div>
            <PeopleTopBlock />
            <PlayersBlock />
            <PeopleBottomBlock />
            <div className="gameblock" id="chat-block"
                 style={{position: "relative"}}/>
        </div>
    );
}

export default PlayersBlockContainer;

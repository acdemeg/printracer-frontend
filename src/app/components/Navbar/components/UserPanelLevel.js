import React from 'react';

const UserPanelLevel = () => {
    return (
        <div id="userpanel-level-container">
            <span id="userpanel-level-value-shadow">13</span>
            <span id="userpanel-level-value">13</span>
            <div id="userpanel-level-progress"
                 style={{background: "url(public/images/userpanel-level/0.png)"}}
            />
        </div>
    );
}

export default UserPanelLevel;

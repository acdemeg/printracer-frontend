import React from 'react';
import './styles/navbar.scss';
import UserBlock from "./components/UserBlock";
import StatsBlock from "./components/StatsBlock";

const Navigation = () => {
    return (
        <div className="userpanel logged" style={{ position: "static" }}>
            <UserBlock />
            <StatsBlock />
        </div>
    );

}

export default Navigation;

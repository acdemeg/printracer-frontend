import React from 'react';

const PeopleTopBlock = () => {
    return (
        <div className="people">&nbsp;
            <img
                style={{position: "absolute", right: "83px", bottom: "7px", zIndex: "-7"}}
                src="/public/images/people/t2.png"/>
            <img
                style={{position: "absolute", right: "29px", bottom: "3px", zIndex: "--3"}}
                src="/public/images/people/t3.png"/>
            <img
                style={{position: "absolute", right: "69px", bottom: "-18px", zIndex: "18"}}
                src="/public/images/people/t4.png"/>
            <img
                style={{position: "absolute", right: "21px", bottom: "-8px", zIndex: "8"}}
                src="/public/images/people/t5.png"/>
            <img
                style={{position: "absolute", right: "73px", bottom: "-2px", zIndex: "2"}}
                src="/public/images/people/t6.png"/>
            <img
                style={{position: "absolute", right: "58px", bottom: "-3px", zIndex: "3"}}
                src="/public/images/people/t7.png"/>
            <img id="hidden_alien"
                 style={{position: "absolute", right: "127px", bottom: "-17px", zIndex: "17"}}
                 src="/public/images/people/t10.png"/>
        </div>
    );
}

export default PeopleTopBlock;

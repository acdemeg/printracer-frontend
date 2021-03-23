import React from 'react';
import InputTextBlock from "./InputTextBlock";
import TypePlayBlock from "./TypePlayBlock";
import KeyboardBlock from "./KeyboardBlock";

const TypeBlock = () => {
    return (
        <div id="typeblock">
            <div className="r tl">
                <div className="tr">
                    <div className="bl">
                        <div className="br">
                            <div className="rc">
                                <div className="handle">
                                    <img src="/public/images/blank.gif"/>
                                </div>
                                <TypePlayBlock />
                                <KeyboardBlock />
                                <div id="bookinfo" style={{display: "none"}}/>

                                <div id="replay" style={{display: "none"}}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TypeBlock;
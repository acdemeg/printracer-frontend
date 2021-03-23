import React from 'react';

const KeyboardBlock = () => {
    return (
        <div id="keyboard_cont">
            <div id="keyboard"
                 style={{display: "none"}}>
                <div id="back_keyboard">
                    <div id="fore_keyboard"
                         style={{display: "none"}}>
                        <div
                            id="shift_keyboard"
                            style={{display: "none"}}>
                        </div>
                    </div>
                </div>
            </div>
            <a id="param_keyboard">Показать экранную клавиатуру</a>
        </div>
    );
}

export default KeyboardBlock;
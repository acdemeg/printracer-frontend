import React from 'react';
import { connect } from "react-redux";

const KeyboardBlock = ({
    highlightButtonPositions,
    nextSymbolEntered,
    showHideKeyboard,
    keyboardVisible
}) => {
    return (
        <div id="keyboard_cont">
            <div id="keyboard" style={keyboardVisible}>
                <div id="back_keyboard" >
                    <div id="fore_keyboard"
                         style={highlightButtonPositions}>
                        <div id="shift_keyboard" style={{ display: "none" }}/>
                    </div>
                </div>
            </div>
            <a
                onClick={showHideKeyboard}
                id="param_keyboard">Показать экранную клавиатуру
            </a>
        </div>
    );
}

const mapStateToProps = ({
    highlightButtonPositions,
    keyboardVisible
}) => {
    return {
        highlightButtonPositions,
        keyboardVisible
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextSymbolEntered: (buttonPositions) => {
            dispatch({
                type: 'NEXT_SYMBOL_ENTERED',
                payload: buttonPositions
            })
        },
        showHideKeyboard: () => {
            dispatch({
                type: 'SHOW_HIDE_KEYBOARD'
            })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardBlock);

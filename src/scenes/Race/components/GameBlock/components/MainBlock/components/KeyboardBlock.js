import React from 'react';
import { withMockService } from 'root/app/components/hoc/index'
import { connect } from "react-redux";

const KeyboardBlock = ({ highlightButtonPositions, mockService, nextSymbolEntered }) => {

    return (
        <div id="keyboard_cont">
            <div id="keyboard">
                <div id="back_keyboard" onClick={()=>nextSymbolEntered(mockService.getButtonPositions())}>
                    <div id="fore_keyboard"
                         style={highlightButtonPositions}>
                        <div id="shift_keyboard" style={{ display: "none" }}/>
                    </div>
                </div>
            </div>
            <a id="param_keyboard">Показать экранную клавиатуру</a>
        </div>
    );
}

const mapStateToProps = ({ highlightButtonPositions }) => {
    return { highlightButtonPositions };
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextSymbolEntered: (buttonPositions) => {
            dispatch({
                type: 'NEXT_SYMBOL_ENTERED',
                payload: buttonPositions
            })
        }
    };
}

export default withMockService()(
    connect(mapStateToProps, mapDispatchToProps)(KeyboardBlock)
);

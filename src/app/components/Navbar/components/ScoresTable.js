import React from 'react';

const ScoresTable = () => {
    return (
        <table className="scores-table">
            <tbody>
            <tr>
                <td>Очки:</td>
                <td id="userpanel-scores-container">
                    <span id="userpanel-scores">-43410</span>
                </td>
            </tr>
            <tr>
                <td>Бонусы:</td>
                <td id="userpanel-bonuses">120</td>
            </tr>
            </tbody>
        </table>
    );
}

export default ScoresTable;

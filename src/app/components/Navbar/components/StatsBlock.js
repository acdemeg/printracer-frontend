import React from 'react';

const StatsBlock = () => {
    return (
        <div id="stats-block">
            <table cellPadding="0" cellSpacing="0">
                <tbody>
                <tr>
                    <td className="gametype">Обычный</td>
                    <td className="title">Лучшая скорость:</td>
                    <td className="value">391 зн/мин</td>
                    <td rowSpan="2" className="divider">&nbsp;</td>
                    <td className="title">Ошибки:</td>
                    <td className="value">2,67%</td>
                </tr>
                <tr>
                    <td/>
                    <td className="title">Средняя скорость:</td>
                    <td className="value">291 зн/мин</td>
                    <td className="title">Пробег:</td>
                    <td className="value haul">3124 текста</td>
                </tr>
                </tbody>
            </table>
        </div>
    );

}

export default StatsBlock;
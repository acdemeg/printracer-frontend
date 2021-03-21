import React from 'react';
import './navbar.scss';

const Navigation = () => {
    return (
        <div className="userpanel logged" style={{ position: "static" }}>
            <div className="user-block">
                <table cellPadding="0" cellSpacing="0">
                    <tbody>
                    <tr>
                        <td>
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
                        </td>
                        <td id="userpanel-level">
                            <div id="userpanel-level-container">
                                <span id="userpanel-level-value-shadow">13</span>
                                <span id="userpanel-level-value">13</span>
                                <div id="userpanel-level-progress"
                                     style={{background: "url(public/images/userpanel-level/0.png)"}}
                                />
                            </div>
                        </td>
                        <td className="user-dropdown">
                            <div className="drop-btn">
                                <div className="name">
                                    <img src="http://klavogonki.ru/storage/avatars/376326_big.png?updated=1579002588"/>
                                    <span>acdemeg</span>
                                    <div className="caret"/>
                                </div>
                            </div>

                            <div className="dropmenu ng-hide">
                                <div className="col1">
                                    <ul>
                                        <li><a className="btn" href="/u/#/376326/">Перейти к профилю</a></li>
                                        <li className="unread_mail ng-scope">
                                            <a href="/u/#/376326/messages/" className="ng-hide">
                                                0 новых сообщений
                                            </a>
                                            <span
                                                className="note">Новых сообщений нет.
                                            </span>
                                        </li>
                                        <li className="logout">
                                            <a href="">Выйти</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col2">
                                    <ul>
                                        <li><a href="/u/#/376326/">Сводка</a></li>
                                        <li><a href="/u/#/376326/achievements/">Достижения</a></li>
                                        <li><a href="/u/#/376326/car/">Гараж</a></li>
                                        <li><a href="/u/#/376326/journal/">Бортжурнал</a></li>
                                        <li><a href="/u/#/376326/friends/">Друзья</a></li>
                                        <li><a href="/u/#/376326/stats/">Статистика</a></li>
                                        <li><a href="/u/#/376326/messages/">Сообщения</a></li>
                                        <li><a href="/u/#/376326/prefs/">Настройки</a></li>
                                    </ul>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
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
        </div>
    );

}

export default Navigation;
import React from 'react';

const UserDropDownMenu = () => {
    return (
            <div className="dropmenu">
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
    );
    return null;
}

export default UserDropDownMenu;

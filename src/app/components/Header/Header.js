import React, { Fragment }from 'react';
import './Header.scss';

const Header = () => {
    return (
        <Fragment>
            <div id="head" className="minwidth green-back">
                <div className="minwidth_holyhack">
                    <div className="minwidth_container">

                        <div id="logo">
                            <a href="/">
                                <img src="/public/images/logo.gif" alt="Клавогонки.Ру" title="Клавогонки.Ру"/>
                            </a>
                        </div>

                        <div className="right">

                            <div className="login-block">
                                &nbsp;
                            </div>

                            <div className="menu">
                                <a href="/forum/">Форум</a>
                                <a href="/wiki/">Вики</a>
                                <a href="/fuel/">Дозаправка</a>
                                <a href="/about/">Об игре</a>
                                <a href="/vocs/top/">Словари</a>
                                <a href="/top/">Рейтинг</a>
                                <a href="/gamelist/">Заезды</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bar"/>
        </Fragment>
    );

}

export default Header;
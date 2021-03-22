import React from 'react';

const PlayersBlock = () => {
    return (
        <div className="gameblock" id="players-block"
             style={{position: "relative"}}>
            <div className="handle">
                <img src="/public/images/blank.gif"/>
            </div>
            <div id="players-count-lbl">
                <span>1 участник</span>
            </div>

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

            <div id="players" className="ng-scope">
                <div className="player you ng-scope" id="player0">
                    <div className="newrecord" id="newrecord0"
                         style={{display: "none"}}><span
                        className="ng-hide">
                    <a
                        className="ng-hide">Рекорд!</a>
                        <a
                            className="nopost">Рекорд!</a>
                         </span>
                        <a
                            className="ng-hide">Достижение!
                        </a>
                        <a
                            className="typestats ng-hide">ПОДТВЕРЖДЕНО
                        </a>
                    </div>
                    <div className="rating" id="rating0"
                         style={{display: "none"}}/>
                    <div id="rating_loading"
                         style={{display: "none"}}>Результат засчитан.
                        Подождите...
                    </div>
                    <table className="car" id="car0">
                        <tbody>
                        <tr>
                            <td className="name">
                                <div className="name_content">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td colSpan="2"
                                                className="top-award"><i
                                                className="award award3"
                                                title="Кубок за 2000 текстов пробега"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <img
                                                    src="http://klavogonki.ru/storage/avatars/376326.png?updated=1579002588"/>
                                            </th>
                                            <td>
                                                <div
                                                    className="nick_content">
                                                    <a href="/profile/376326/"
                                                       className="rang4 profile"
                                                       onMouseMove={() => {
                                                       }}
                                                       onMouseOver={() => {
                                                       }}
                                                       onMouseOut={() => {
                                                       }}>acdemeg</a>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                            <td>
                                <div className="car ng-isolate-scope">
                                    <div className="imgcont"
                                         style={{background: "rgb(0, 0, 0)"}}>
                                        <div
                                            className="img car-base_4 car43"
                                            style={{backgroundColor: "transparent"}}/>
                                        <div
                                            className="car-tuning img car-tuning1_2 car43"/>
                                        <div
                                            className="car-tuning img car-tuning2_4 car43"/>
                                        <div
                                            className="car-tuning img car-tuning3_8 car43"/>
                                        <div
                                            className="car-tuning car-tuning4_ img car43"/>
                                        <div
                                            className="car-tuning img car-tuning5_2 car43"/>
                                        <div
                                            className="car-tuning img car-tuning6_3 car43"/>
                                        <div
                                            className="car-tuning car-tuning7_ img car43"/>
                                        <div
                                            className="car-tuning car-tuning8_ img car43"/>
                                        <div
                                            className="car-tuning car-tuning9_ img car43"/>
                                        <div
                                            className="car-tuning car-tuning10_ img car43"/>
                                        <div
                                            className="car-tuning car-tuning11_ img car43"/>
                                        <div
                                            className="car-tuning car-tuning12_ img car43"/>
                                        <div
                                            className="car-tuning car-tuning13_ img car43"/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="divider">
                        <img src="/public/images/blank.gif"/>
                    </div>
                </div>
            </div>

            <div className="people">&nbsp;
                <img
                    style={{position: "absolute", right: "73px", bottom: "18px", zIndex: "-18"}}
                    src="/public/images/people/b1.png"/>
                <img
                    style={{position: "absolute", right: "58px", bottom: "15px", zIndex: "-15"}}
                    src="/public/images/people/b3.png"/>
                <img
                    style={{position: "absolute", right: "87px", bottom: "13px", zIndex: "-13"}}
                    src="/public/images/people/b4.png"/>
                <img
                    style={{position: "absolute", right: "61px", bottom: "2px", zIndex: "-2"}}
                    src="/public/images/people/b6.png"/>
                <img
                    style={{position: "absolute", right: "53px", bottom: "15px", zIndex: "-15"}}
                    src="/public/images/people/b7.png"/>
            </div>
            <div className="gameblock" id="chat-block"
                 style={{position: "relative"}}/>
        </div>
    );
}

export default PlayersBlock;
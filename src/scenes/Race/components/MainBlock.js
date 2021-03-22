import React from 'react';

const MainBlock = () => {
    return (
        <div className="gameblock" id="main-block"
             style={{position: "relative"}}>
            <div id="typeblock">
                <div className="r tl">
                    <div className="tr">
                        <div className="bl">
                            <div className="br">
                                <div className="rc">
                                    <div className="handle">
                                        <img src="/public/images/blank.gif"/>
                                    </div>

                                    <div id="typeplayblock">

                                        <div id="fontsize_cont"
                                             style={{fontFamily: "Tahoma", fontSize: "17px", lineHeight: "1.2em"}}>
                                            <div id="typetext"
                                                 style={{opacity: "0.5", display: "none"}}
                                                 className="full">
                                                &nbsp;
                                            </div>

                                            <div id="hiddentext">
                                                Текст скрыт до начала
                                                игры
                                            </div>
                                        </div>


                                        <div style={{position: "relative"}}
                                             id="inputtextblock">
                                            <div id="fixtypo"
                                                 style={{display: "none"}}>Исправьте
                                                опечатку!
                                            </div>
                                            <input type="text"
                                                   tabIndex="1"
                                                   className="disabled"
                                                   name="sometext"
                                                   id="inputtext"
                                                   disabled=""
                                                   autoComplete="off"
                                                   value="Набирайте здесь текст после начала игры"
                                                   onChange={() => {}}
                                                   style={{fontFamily: "Tahoma", fontSize: "17.5px"}}/>
                                            <div id="entertip"
                                                 style={{color: "#999", fontSize: "12px", textAlign: "center", marginTop: "10px", display: "none"}}>
                                                По
                                                окончании набора
                                                нажмите
                                                клавишу Enter
                                            </div>
                                        </div>
                                    </div>


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
                                        <a id="param_keyboard">Показать
                                            экранную клавиатуру</a>
                                    </div>

                                    <div id="bookinfo" style={{display: "none"}}/>

                                    <div id="replay" style={{display: "none"}}/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="errors_text" className="errors_text"
                 style={{display: "none"}}>

            </div>

            <div id="report">
                <div id="report_ok" style={{display: "none"}}>Спасибо. Мы
                    обязательно проверим этот текст.
                </div>
                <div id="report_reason" style={{display: "none"}}>
                    Пожалуйста, опишите проблему в тексте:
                    <textarea id="report_reason_input" rows="3" cols="40"
                              onKeyUp={() => {}}/>
                    <input id="report_button" type="button"
                           value="Отправить"
                           onClick={() => {}}
                           onChange={() => {}}
                           disabled=""/>
                </div>
                <div id="report_link">
                    <a className="bitmore" href=""
                       onClick={() => {}}>Как
                        играть?</a>
                    <a id="report_link_a"
                       href="">Пожаловаться
                        на текст</a></div>
            </div>

            <div id="errorwork" style={{display: "none"}}>
                <a href="">Работа над
                    ошибками</a>
            </div>

            <div id="errors_tab" style={{display: "none"}}><a>Посмотреть
                ошибки</a></div>
            <div style={{clear: "left", height: "1px"}}/>
        </div>
    );

}

export default MainBlock;
import React from 'react';

const Report = () => {
    return (
        <div id="report">
            <div id="report_ok" style={{display: "none"}}>Спасибо. Мы
                обязательно проверим этот текст.
            </div>
            <div id="report_reason" style={{display: "none"}}>
                Пожалуйста, опишите проблему в тексте:
                <textarea id="report_reason_input" rows="3" cols="40"
                          onKeyUp={() => {
                          }}/>
                <input id="report_button" type="button"
                       value="Отправить"
                       onClick={() => {
                       }}
                       onChange={() => {
                       }}
                       disabled=""/>
            </div>
            <div id="report_link">
                <a className="bitmore" href=""
                   onClick={() => {
                   }}>Как
                    играть?</a>
                <a id="report_link_a"
                   href="">Пожаловаться
                    на текст</a></div>
        </div>
    );
}

export default Report;
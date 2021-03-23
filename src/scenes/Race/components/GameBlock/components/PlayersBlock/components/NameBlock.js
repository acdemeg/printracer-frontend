import React from 'react';

const NameBlock = () => {
    return (
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
    );
}

export default NameBlock;

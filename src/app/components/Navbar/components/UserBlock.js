import React from 'react';
import ScoresTable from "./ScoresTable";
import UserPanelLevel from "./UserPanelLevel";
import UserDropDownBtn from "./UserDropDownBtn";
import UserDropDownMenu from "./UserDropDownMenu";

const UserBlock = () => {
    return (
        <div className="user-block">
            <table cellPadding="0" cellSpacing="0">
                <tbody>
                <tr>
                    <td>
                        <ScoresTable />
                    </td>

                    <td id="userpanel-level">
                        <UserPanelLevel />
                    </td>

                    <td className="user-dropdown">
                        <UserDropDownBtn />
                        <UserDropDownMenu />
                    </td>

                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserBlock;
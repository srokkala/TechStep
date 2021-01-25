import React from 'react';
import "./ResultRow.css";
import {Result} from "./Result";

/*
 * This Function Simply takes each user from the userList prop and displays them as a unique Result
 * component listing
 */
export const ResultRow = (props) => {
    console.log(props);

    return (
        <div> {props.userList.map(user =>
            <Result key={user.id} user={user}> </Result>)
        }
        </div>
    );
};

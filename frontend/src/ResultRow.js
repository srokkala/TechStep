import React from 'react';
import "./ResultRow.css";
import {Result} from "./Result";


export const ResultRow = (props) =>{
console.log(props);

return(
        <div> {props.userList.map(user =>
        <Result key={user.id} user={user}> </Result>)
        }
            </div>
    );
};

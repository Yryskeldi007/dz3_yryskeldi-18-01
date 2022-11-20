import React from 'react';
import classes from "./reactCopy.module.css"

function ReactCopy(props) {
    const user = {name: "Make", age: 21}
    console.log(user)

    return (
        <ul className={classes.title}>
            <h1>React Copy</h1>
            <li>name: Make</li>
            <li>age: 21</li>
        </ul>
    );
}

export default ReactCopy;
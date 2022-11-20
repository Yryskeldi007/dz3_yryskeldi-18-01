import React from 'react';
import classes from "./reactBook.module.css"

function ReactBook(props) {
    const user = {name: "Make", age: 21}
    console.log(user)

    return (
        <ul className={classes.title}>
            <h1>ReactBook</h1>
            <li>name: Make</li>
            <li>age: 21</li>
        </ul>
    );
}

export default ReactBook;
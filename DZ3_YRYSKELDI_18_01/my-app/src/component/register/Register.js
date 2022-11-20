
import React from 'react';

function Register(props) {
    const welcomeHello = () => {
        alert("hello host")
    }
    return (
        <>
            <button onClick={welcomeHello}>welcome!</button>
        </>
    );
}

export default Register;
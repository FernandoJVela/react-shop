import React from "react";

const Login = () => {
    return (
        <div>
            <h3>Login</h3>
            <label>Username: </label>
            <input type="text"/>
            <label htmlFor="password">Password: </label>
            <input id="password" type="password"/>
            <button>Login</button>
        </div>
    );
};

export {Login};
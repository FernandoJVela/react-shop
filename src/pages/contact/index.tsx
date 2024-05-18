import React from "react";
import { useUser } from '../../components/userContext';

const Contact = () => {
    const { userId, username, permissions } = useUser();
    return (
        <div>
            <h1>Contact</h1>
            <span>{username}</span>
        </div>
    );
}

export {Contact};
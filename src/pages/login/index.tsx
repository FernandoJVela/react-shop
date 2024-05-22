import React from "react"
import { TextField } from "../../components/textfield"
import { Button } from "../../components/button"
import { useLocalStorage } from '../../components/useLocalStorage'

import './style/index.css'
import { PasswordField } from "../../components/passwordfield"

const Login = () => {   

    const { setLocalStorageItem } = useLocalStorage();
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    const passwordErrorMessage = "The password should have at least one uppercase, one special character and a length of 10 characters.";
    const emailErrorMessage = "Please enter a valid email.";

    const handleLogin: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        if (!validateEmail && !validatePassword)
            return;

        setLocalStorageItem("email", email);
        setLocalStorageItem("password", password);
    };

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password: string) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasMinLength = password.length >= 10;
        return hasUpperCase && hasSpecialChar && hasMinLength;
    }

    return (
        <div className="login__container">
            <div className="login__title">
                <h3>Let's start shopping!</h3>
            </div>
            <div className="login__fields-container">
                <TextField 
                    value={email} 
                    label="Email: " 
                    name="email" 
                    id="emailId" 
                    validate={validateEmail}
                    errorMessage={emailErrorMessage}
                    placeholder="Write down your email"
                    onChange={setEmail} />
                <PasswordField 
                    value={password} 
                    label="Password: " 
                    name="password" 
                    id="passwordId"
                    validate={validatePassword}
                    errorMessage={passwordErrorMessage}
                    placeholder="Type your password"
                    onChange={setPassword} />
                <Button label="Login" name="loginButton" id="loginButtonId" onClick={handleLogin} />
            </div>
        </div>
    );
};

export {Login};
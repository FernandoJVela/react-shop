import React from "react";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

import './style/index.css';

interface PasswordFieldProps {
    label: string,
    type?: string,
    name: string,
    id: string,
    onChange: (value: string) => void,
    value: string;
    placeholder?: string;
    validate?: (value: string) => boolean;
    errorMessage?: string;
};

const PasswordField = ({
    label,  
    name, id, 
    onChange,
    value,
    placeholder = '',
    validate,
    errorMessage = 'Please enter a correct value',}: PasswordFieldProps) => {
    const [error, setError] = React.useState<string | null>(null);
        const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;
            onChange(newValue);
            setError(validate && !validate(newValue) ? errorMessage : null);
        };
    
        const handleBlur = () => {
            if (validate && !validate(value)) {
                setError(errorMessage);
            }
        };

        const togglePasswordVisibility = () => {
            setIsPasswordVisible(!isPasswordVisible);
        };
    
        return (
            <div className="password-container">
                <label className="password-label">{label}</label>
                <div className={"password-field-button"}>
                    <input 
                        className={error ? 'password-field error' : 'password-field'}
                        type={isPasswordVisible ? "text" : "password"} 
                        name={name}
                        id={id}
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={placeholder}/>
                    <button
                        type="button"
                        className={error ? 'toggle-visibility error': 'toggle-visibility'}
                        onClick={togglePasswordVisibility}
                    >
                        {isPasswordVisible ? <BiSolidShow color="var(--border-color)" /> : <BiSolidHide color="var(--border-color)" />}
                    </button>
                </div>
                {error && <p className="error-message">{error}</p>}
            </div>
        );
};

export {PasswordField};
import React from 'react'

import './style/index.css'

interface TextFieldProps {
    label: string,
    type?: string,
    name: string,
    id: string,
    onChange: (value: string) => void,
    value: string;
    placeholder?: string;
    validate?: (value: string) => boolean;
    errorMessage?: string;
}

const TextField: React.FC<TextFieldProps> = ({
    label, 
    name, id, 
    onChange,
    value,
    placeholder = '',
    validate,
    errorMessage = 'Please enter a correct value',}: TextFieldProps) => {
    
        const [error, setError] = React.useState<string | null>(null);

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
    
        return (
            <div className="text-container">
                <label className="text-label">{label}</label>
                <div className={"text-input"}>
                    <input 
                        className={error ? 'text-field error' : 'text-field'}
                        type={"text"} 
                        name={name}
                        id={id}
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={placeholder}/>
                </div>
                {error && <p className="error-message">{error}</p>}
            </div>
        );
};

export {TextField}
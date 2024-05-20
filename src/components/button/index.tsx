import React from 'react'

import './style/index.css'

interface ButtonProps {
    label: string,
    name: string,
    id: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({label, name, id, onClick}: ButtonProps) => {

    const [bubbles, setBubbles] = React.useState<{ x: number; y: number }[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = event;
        setBubbles(prevBubbles => [...prevBubbles, { x: clientX, y: clientY }]);

        setTimeout(async () => {
            setBubbles([]);
            try {
                await onClick(event);
            } catch (error) {
                console.error('Inner error: ', error);
            }
        }, 2000);
    };

    return (
        <>            
            <button 
                className='button'
                name={name}
                id={id}
                onClick={handleClick}>{label}</button>
            {bubbles.map((bubble, index) => (
                <div
                    key={index}
                    className="bubble"
                    style={{ top: bubble.y - 20, left: bubble.x - 20 }}
                ></div>
            ))}
        </>
    );
}

export { Button }
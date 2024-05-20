import React, { ReactNode } from 'react'

import './style/index.css'

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="app-container">
            { children }
        </div>
    );
};
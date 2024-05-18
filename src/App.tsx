import React from 'react'
import {Header} from './components/header/index'
import { AppRoutes } from './components/appRoutes'

const App: React.FC = () => {

    return (
        <>
            <Header />
            <AppRoutes />
        </>
    );
}

export default App
import React from 'react'
import {Header} from './components/header/index'
import { AppRoutes } from './components/appRoutes'
import { Layout } from './components/layout';

const App: React.FC = () => {

    return (
        <Layout>
            <Header />
            <AppRoutes />
        </Layout>
    );
}

export default App
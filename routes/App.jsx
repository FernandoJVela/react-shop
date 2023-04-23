import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../src/containers/Layout';
import { Header } from '../src/components/Header';
import { Login } from '../src/pages/Login';
import { Home } from '../src/pages/Home';
import { PasswordRecovery } from '../src/pages/PasswordRecovery';
import { SendEmail } from '../src/pages/SendEmail';
import { NewPassword } from '../src/pages/NewPassword';
import { MyAccount } from '../src/pages/MyAccount';
import { CreateAccount } from '../src/pages/CreateAccount';
import { Checkout } from '../src/pages/Checkout';
import { Orders } from '../src/pages/Orders';
import { NotFound } from '../src/pages/NotFound';
import { AppContext } from '../src/context/AppContext';
import { useInitialState } from '../src/hooks/useInitialState';
import '../src/styles/global.css';

const App = () => {
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            <HashRouter>
                <Header />
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path='/recovery-password' element={<PasswordRecovery />} />
                        <Route exact path="/send-email" element={SendEmail} />
                        <Route exact path="/new-password" element={NewPassword} />
                        <Route exact path="/account" element={MyAccount} />
                        <Route exact path="/signup" element={CreateAccount} />
                        <Route exact path="/checkout" element={Checkout} />
                        <Route exact path="/orders" element={Orders} />
                        <Route exact path='*' element={<NotFound />} />
                    </Routes>
                </Layout>
            </HashRouter>
        </AppContext.Provider>
    );
}

export {App};
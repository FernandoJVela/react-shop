import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Contact } from "../../pages/contact";
import { Home } from "../../pages/home";
import { Login } from "../../pages/login";
import { useUser } from '../userContext/index';
import { ProtectedRoute } from "../protectedRoute";

const AppRoutes = () => {
    const { userId, username, permissions } = useUser();
    return (
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />            
            <Route path="contact" element={
                <ProtectedRoute isAllowed={username !== null}>
                    <Contact />
                </ProtectedRoute>} />            
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
    );
};

export {AppRoutes};
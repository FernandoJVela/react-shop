import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
    isAllowed: boolean,
    redirectPath?: string,
    children: React.ReactElement,
}

const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/home',
    children,
  }: ProtectedRouteProps): React.ReactElement => {
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };

export {ProtectedRoute};
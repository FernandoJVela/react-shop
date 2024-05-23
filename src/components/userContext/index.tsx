import React, { ReactNode, createContext, useContext, useState } from 'react';

interface UserContextType {
  userId?: number;
  username?: string;
  permissions?: string[];
  setUser: (user: User) => void;
}

interface User {
  userId?: number,
  username?: string,
  email?: string,
  password?: string,
  createdon?: Date,
  permissions?: string[],
}

interface UserProviderProps {
  children: ReactNode;
}

const initialUserState: User = {
  userId: undefined,
  username: undefined,
  permissions: [],
};

const UserContext = createContext<UserContextType>({
  ...initialUserState,
  setUser: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<UserProviderProps> = ({ children }: any) => {
  const [user, setUser] = useState<User>(initialUserState);

  const setUserContext = (user: User) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ ...user, setUser: setUserContext }}>
      {children}
    </UserContext.Provider>
  );
};
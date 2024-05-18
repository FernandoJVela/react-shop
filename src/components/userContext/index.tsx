import React, { ReactNode, createContext, useContext, useState } from 'react';

interface UserContextType {
  userId: string | null;
  username: string | null;
  permissions: string[] | null;
  setUser: (user: User) => void;
}

interface User {
  userId: string | null;
  username: string | null;
  permissions: string[];
}

interface UserProviderProps {
  children: ReactNode;
}

const initialUserState: User = {
  userId: null,
  username: null,
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
import  { createContext, useContext, useState } from 'react';
import { IUser } from '../models/User';

interface IdentityContextType {
    user: IUser | null;
    authenticated: boolean;
    login: (userData: IUser) => void;
    logout: () => void;
    jwtToken:string |null;
  }

  const IdentityContext = createContext<IdentityContextType | undefined>(undefined);

  export const useIdentity = () => {
    const context = useContext(IdentityContext);
    if (!context) {
      throw new Error('useIdentity must be used within an IdentityProvider');
    }
    return context;
  };

  //@ts-ignore
  export const IdentityProvider= ({ children }) => {
    const [user, setUser] = useState<IUser>({
      username:'',
      apples:0,
      profileImage:''
    });
    const [authenticated, setAuthenticated] = useState<boolean>(false);
  
    const login = (userData: IUser) => {
      setUser(userData);
      setAuthenticated(true);
    };
  
    const logout = () => {
      setUser({
        username:'',
        apples:0,
        profileImage:''
      });
      setAuthenticated(false);
    };
  
    const contextValue: IdentityContextType = {
      user,
      authenticated,
      login,
      logout,
      jwtToken:null
    };
  
    return (
      <IdentityContext.Provider value={contextValue}>
        {children}
      </IdentityContext.Provider>
    );
  };
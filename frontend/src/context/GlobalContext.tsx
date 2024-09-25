// src/context/GlobalContext.ts
import { createContext, useContext, ReactNode } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/auth/";

interface GlobalContextType {
    login: (signinData: SigninDataProps) => Promise<void>;
    signup: (signupData: SignupDataProps) => Promise<void>;
}

interface SigninDataProps {
    email: string;
    password: string;
}

interface SignupDataProps {
    username: string;
    email: string;
    password: string;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const login = async (signinData: SigninDataProps) => {
        try {
            const response = await axios.post(`${BASE_URL}signin`, signinData, {
                headers: {
                    'Content-Type': 'application/json'
                  }
            });
            console.log(response.data);
        } catch (err) {
            console.error(err); 
        }
    };

    // signup function
    const signup = async (signupData: SignupDataProps) => {
        try {
            const res = await axios.post(`${BASE_URL}signup`, signupData, {
                headers: {
                    'Content-Type': 'application/json'
                  }
            });
            console.log(res.data);
        } catch (err) {
            console.log(err)     
        }
    }

    return (
        <GlobalContext.Provider value={{ login, signup }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};

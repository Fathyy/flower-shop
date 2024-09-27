// src/context/GlobalContext.ts
import { createContext, useContext, ReactNode } from 'react';
import axios from 'axios';
import { FlowerProps, GlobalContextType, SigninDataProps, SignupDataProps } from '@/types/types';

const BASE_URL = "http://localhost:5000/api/";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const login = async (signinData: SigninDataProps) => {
        try {
            const response = await axios.post(`${BASE_URL}auth/signin`, signinData, {
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
            const res = await axios.post(`${BASE_URL}auth/signup`, signupData, {
                headers: {
                    'Content-Type': 'application/json'
                  }
            });
            console.log(res.data);
        } catch (err) {
            console.log(err)     
        }
    }

    // get flowers function
     const getFlowers = async (): Promise<FlowerProps[]> => {
        try {
            const res = await axios.get(`${BASE_URL}flowers`, {
                headers: {
                    'Content-Type': 'application/json'
                  }
            });
            return res.data;
        } catch (err) {
            console.log(err)     
            return [];
        }
     }

    return (
        <GlobalContext.Provider value={{ login, signup, getFlowers }}>
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

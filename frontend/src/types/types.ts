export interface FlowerProps {
    _id: string;
    name: string;
    scientificName: string;
    description: string;
    picturePath: string;
    usePicturePath: string;
  }

export interface GlobalContextType {
    login: (signinData: SigninDataProps) => Promise<void>;
    signup: (signupData: SignupDataProps) => Promise<void>;
    getFlowers: () => Promise<FlowerProps[]>;
}

export interface SigninDataProps {
    email: string;
    password: string;
}

export interface SignupDataProps {
    username: string;
    email: string;
    password: string;
}
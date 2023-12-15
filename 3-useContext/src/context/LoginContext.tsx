import { ReactNode, createContext, useContext } from "react";

interface LoginContextProps {
  email: string;
  password: number;
}

const LoginContext = createContext<LoginContextProps | null>(null);

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const value: LoginContextProps = {
    email: "dipeshpaudel@example.com",
    password: 9876543210,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

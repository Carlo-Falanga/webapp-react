import { createContext, useState, useContext } from "react";

// custom context component
export const GlobalContext = createContext();



// export provider component and its hook
const GlobalProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    
    return (
        <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}

// custom context hook to use the global loading state
const useGlobalContext = () => {
    return useContext(GlobalContext);
    
};

export { GlobalProvider, useGlobalContext };
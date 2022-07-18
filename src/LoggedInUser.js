import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextWrapper = ({ children }) => {
    
    const [user, setUser] = useState({
        name: "",
        id: "",
        userName: "",
        type: "",
        LoggedIn: false,
        gender: "",
        age: "",
        mail:""
      });

    return (
        <SearchContext.Provider value={{ user, setUser }}>
            {children}
        </SearchContext.Provider>
    );
};

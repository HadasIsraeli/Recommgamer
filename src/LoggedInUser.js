import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextWrapper = ({ children }) => {

    const [user, setUser] = useState({
        name: "",
        id: "",
        nickname: "",
        type: "",
        LoggedIn: false,
        gender: '',
        age: ""
    });

    return (
        <SearchContext.Provider value={{ user, setUser }}>
            {children}
        </SearchContext.Provider>
    );
};

import { createContext, useState } from "react";

export const LoggedContext = createContext();

export const LoggedContextWrapper = ({ children }) => {

    const [user, setUser] = useState({
        name: "",
        id: "",
        userName: "",
        type: "",
        LoggedIn: false,
        gender: "",
        age: "",
        mail: "",
        history: []
    });

    return (
        <LoggedContext.Provider value={{ user, setUser }}>
            {children}
        </LoggedContext.Provider>
    );
};

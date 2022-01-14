import { createContext, useState } from 'react';

// Exercise 6: Using provider to set user status
export default function Provider({ children }) {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <AppContext.Provider value={[isLogin, setIsLogin]}>
            {children}
        </AppContext.Provider>
    )
}

export const AppContext = createContext();
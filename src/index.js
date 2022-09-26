import React from 'react';
import ReactDom from 'react-dom/client';
import "./index.css";
import App from "./App";
import PollContextProvider from './context/PollContext';
import userData from "./user.json";
// console.log(userData);

export const UserContext = React.createContext()

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <UserContext.Provider value={userData}>
            <PollContextProvider>
                <App />
            </PollContextProvider>
        </UserContext.Provider>
    </React.StrictMode>
);

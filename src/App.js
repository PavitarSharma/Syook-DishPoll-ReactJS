import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import * as ROUTES from "./routes/route";



const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={ROUTES.Home} element={<Home />} />
                    <Route path={ROUTES.Dashboard} element={<Dashboard />} />
                    <Route path={ROUTES.Login} element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;
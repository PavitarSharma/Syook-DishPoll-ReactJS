import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ProtectedRoute from './routes/ProctedRoute';
import * as ROUTES from "./routes/route";




const App = () => {

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route element={<ProtectedRoute />}>
                        <Route path={ROUTES.Home} element={<Home />} />
                        <Route path={ROUTES.Dashboard} element={<Dashboard />} />
                    </Route>
                    <Route path={ROUTES.Login} element={<Login />} />


                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
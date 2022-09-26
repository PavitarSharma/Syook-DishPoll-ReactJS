import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import * as ROUTES from "./route"
const ProtectedRoute = () => {
	
	const user = JSON.parse(localStorage.getItem("user"))
		
	return (
		user ? <Outlet/> : <Navigate to={ROUTES.Login}/>
	  )
	
}

export default ProtectedRoute
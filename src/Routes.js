import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ Component, isAuth }) => {
    return isAuth ? <Component /> : <Navigate to='/admin' />
  }
  
export  const PublicRoute = ({ Component, isAuth }) => {
    return isAuth ? <Navigate to='/dashboard' /> : <Component />
  }
  
  
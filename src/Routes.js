import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ Component}) => {
    const isAuth = useSelector((state)=>state.auth.data?.token)
    return isAuth ? <Component /> : <Navigate to='/admin' />
  }
  
export  const PublicRoute = ({ Component  }) => {
    const isAuth = useSelector((state)=>state.auth.data?.token)
    return isAuth ? <Navigate to='/dashboard' /> : <Component />
  }
  
  
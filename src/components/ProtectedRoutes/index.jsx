import { useDataTechStore } from "../../stores/useDataTechStore"
import { Outlet, Navigate } from "react-router-dom"

export const ProtectedRoutes = () => {
    const {user} = useDataTechStore()
    return user ? <Outlet/> : <Navigate to="/"/>
}
import { useContext } from "react"
import { Navigate } from "react-router-dom";

import { AuthContext } from "../auth"

export const PublicRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );

    return (!logged)
        ? children
        //TODO: modificar para que vaya al inicio
        : <Navigate to='/pma' />
};
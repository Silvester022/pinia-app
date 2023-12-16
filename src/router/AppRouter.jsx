import { Route, Routes } from "react-router-dom"
import { PublicRoute } from "./PublicRoute"

import { LoginPage, SignInPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { MarketsRoutes } from "../markets"

export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path="login/*" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="/*" element={ <LoginPage /> } />
                        </Routes>

                    </PublicRoute>
                } />

                <Route path="/register" element={ <SignInPage /> } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <MarketsRoutes />

                    </PrivateRoute>
                } />

                {/* <Route path="login" element={ <LoginPage/> } /> */}
                {/* <Route path="/*" element={ <MarketsRoutes /> } /> */}
            </Routes>
        </>
    )
}
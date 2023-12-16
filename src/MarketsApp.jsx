import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const MarketsApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
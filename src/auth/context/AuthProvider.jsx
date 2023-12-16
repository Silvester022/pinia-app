import { useReducer } from "react"
import { authReducer } from "./authReducer"
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";

const init = () => {

    const user = JSON.parse( localStorage.getItem('user') );

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ( {children} ) => {

    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

    const login = ( id = '', name = '' ) => {

        const user = { id, name };
        const action = { type: types.login, payload: user };

        localStorage.setItem('user', JSON.stringify( user ));
        // localStorage.setItem('id', JSON.stringify( id ));

        dispatch( action );
    }

    const logout = () => {

        localStorage.removeItem( 'user' );

        const action = { type: types.logout };

        dispatch( action );
    }

    return (
        <AuthContext.Provider  value = {{

            // atributos
            ...authState,

            // metodos
            login: login,
            logout: logout
        }}>
            {children}
            
        </AuthContext.Provider>
    )
}
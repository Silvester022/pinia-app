
export const getUser = async( username, pass ) => {

    const url = `${ import.meta.env.VITE_BASE_ALL_URL }/users`;
    const res = await fetch( url );
    const data = await res.json();

    const user = data.find( d => d.username === username && d.password === pass );

    return user;
}
import { User } from "../model/user"

const createUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_ALL_URL}/users`;

    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();

    return newUser;
}

// const updateUser = async (user) => {

//     const url = `${import.meta.env.VITE_BASE_USERS_URL}/users/${user.id}`;

//     const res = await fetch(url, {
//         method: 'PATCH',
//         body: JSON.stringify(user),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     const updateUser = await res.json();

//     return updateUser;
// }

export const saveUser = async (userLike) => {

    const user = new User(userLike);

    if (!user.name || !user.username || !user.email || !user.password)
        alert("Ha ocurrido un error, vuelve a intentarlo");

    // let userUpdated;

    // if (user.name) {
    //     userUpdated = await updateUser(user);

    // } else {
    //     userUpdated = await createUser(user);
    // }

    const userUpdated = await createUser(user);

    return userUpdated;
}
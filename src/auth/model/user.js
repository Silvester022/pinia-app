
import { v4 as uuid } from "uuid";

export class User {

    /**
     * 
     * @param {like<User>} userDataLike 
     */
    constructor( { name, username, password, email, type_of_user } ) {

        this.id = uuid(),
        this.name = name,
        this.username = username,
        this.password = password,
        this.email = email,
        this.type_of_user = type_of_user
        this.create_at = new Date()
    }
}
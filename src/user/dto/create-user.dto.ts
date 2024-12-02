export class CreateUserDto {
    id: number;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    lastConnection: Date;

    constructor(
        id: number,
        email: string,
        password: string,
        created_at: Date,
        updated_at: Date,
        lastConnection: Date
    ) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.lastConnection = lastConnection;
    }
}
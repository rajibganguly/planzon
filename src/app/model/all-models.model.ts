export interface RegisteredInfo {
    registered?: boolean;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

export interface Register {
    emailId: string;
    password: string;
}

export interface Login {
    emailId: string;
    password: string;
}
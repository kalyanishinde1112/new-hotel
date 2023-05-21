export interface Signin {
    email: string;
    password: string;
}

export interface Email {
    email: string;
}

export interface ResetPassword {
    password: string;
    confirmPassword: string;
    resetToken: string;
}
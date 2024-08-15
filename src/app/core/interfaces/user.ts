import { AbstractControl } from '@angular/forms';
export interface IUser {
    username: string;
    password: string;
}

export interface IUserFormValues {
    username: string | null;
    password: string | null;
  }
  

export interface ILoginResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
    refreshToken: string;
}


export interface IUserControls {
    username : AbstractControl<string | null>;
    password: AbstractControl<string | null>;
}

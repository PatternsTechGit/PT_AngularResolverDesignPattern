import { User } from "./user";

export interface Account {

    accountTitle: string;
    user: User;
    currentBalance: number;
    accountStatus: number;
}
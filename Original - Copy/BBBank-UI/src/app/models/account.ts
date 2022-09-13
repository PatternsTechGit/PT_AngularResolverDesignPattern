import { User } from "./user";

export interface Account {
    userId: number;
    accountTitle: string;
    user: User;
    currentBalance: number;
    accountStatus: number;
    accountNumber: string;

}
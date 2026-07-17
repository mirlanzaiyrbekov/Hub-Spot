import { IUser } from "./user.type"

export interface IUsers {
	users: IUser[]
	total: number
	skip: number
	limit: number
}

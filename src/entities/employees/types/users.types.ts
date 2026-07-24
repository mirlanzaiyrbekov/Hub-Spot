import { IEmployee } from "./employees.type"

export interface IEmployees {
	users: IEmployee[]
	total: number
	skip: number
	limit: number
}

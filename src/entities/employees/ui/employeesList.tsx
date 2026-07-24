import { Loader } from "@/shared"
import { FC, useEffect, useState } from "react"
import { usersApi } from "../api/employees.api"
import { IEmployee } from "../types/employees.type"
import { EmployeCard } from "./employe-card"

export const EmployeesList: FC = () => {
	const [data, setData] = useState<IEmployee[] | null>()

	useEffect(() => {
		const getUsers = async () => {
			const employees = await usersApi.getUsers()
			setData(employees.data?.users)
		}
		getUsers()
	}, [])

	return (
		<div
			className="
        grid xs:grid-cols-1 gap-2 
        sm:grid-cols-2 tablet:grid-cols-3 
        lg:grid-cols-2 xl:grid-cols-4 
        2xl:grid-cols-5 3xl:grid-cols-6
      "
		>
			{!data ? <Loader /> : data.map((data) => <EmployeCard user={data} />)}
		</div>
	)
}

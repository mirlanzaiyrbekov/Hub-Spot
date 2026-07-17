import { Loader } from "@/shared"
import { FC, useEffect, useState } from "react"
import { usersApi } from "../api/user.api"
import { IUser } from "../types/user.type"
import { UserCard } from "./User.card"

export const UsersList: FC = () => {
	const [users, setUsers] = useState<IUser[] | null>()

	useEffect(() => {
		const getUsers = async () => {
			const users = await usersApi.getUsers()
			console.log(users)
			setUsers(users.data?.users)
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
			{!users ? <Loader /> : users.map((user) => <UserCard user={user} />)}
		</div>
	)
}

import { UsersList } from "@/entities"
import React from "react"

export const Home: React.FC = () => {
	return (
		<div className="py-10">
			<UsersList />
		</div>
	)
}

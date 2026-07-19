import { UsersList } from "@/entities"
import { FC } from "react"

export const UsersPage: FC = () => {
	return (
		<>
			<section className="px-1.5 py-2.5">
				<div className="flex items-center gap-2 my-10">
					<span className="text-sm">Общее число сотрудников -</span>
					<strong className="text-base text-textcolor">20</strong>
				</div>
				<UsersList />
			</section>
		</>
	)
}

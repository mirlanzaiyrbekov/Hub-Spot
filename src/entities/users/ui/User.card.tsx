import {
	Badge,
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared"
import { UserIcon } from "lucide-react"
import { FC } from "react"
import { IUser } from "../types/user.type"

interface IUsersCardProps {
	user: IUser
}
export const UserCard: FC<IUsersCardProps> = ({ user }) => {
	return (
		<Card key={user.id} className="relative overflow-hidden">
			<img
				src={user.image}
				alt={user.username}
				className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
			/>
			<CardHeader className="flex items-center gap-2">
				<UserIcon size={16} />
				<CardTitle className="w-32 line-clamp-1 text-ellipsis">
					{user.username}
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<CardDescription className="xs:line-clamp-1">
					{user.company.name}
				</CardDescription>
				<Badge variant="default">{user.email}</Badge>
			</CardContent>
			<CardFooter>
				<Button className="w-full rounded-xl" variant={"outline"}>
					Просмотр
				</Button>
			</CardFooter>
		</Card>
	)
}

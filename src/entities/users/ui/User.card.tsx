import React from "react"

export const UserCard: React.FC = () => {
	// const [users, setUsers] = React.useState<User[] | null>()

	// React.useEffect(() => {
	// 	const getUsers = async () => {
	// 		const users = await userApi.getUsers()
	// 		console.log(users)
	// 		setUsers(users.data?.users)
	// 	}
	// 	getUsers()
	// }, [])

	return (
		<div
			className="
        grid xs:grid-cols-1 gap-2 
        sm:grid-cols-2 tablet:grid-cols-3 
        lg:grid-cols-2 xl:grid-cols-4 
        2xl:grid-cols-5 3xl:grid-cols-6
      "
		>
			awd
			{/* {!users ? (
				<Loader />
			) : (
				users.map((user) => (
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
				))
			)} */}
		</div>
	)
}

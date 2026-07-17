import { ChangeTheme } from "@/features"
import { Button, SidebarTrigger } from "@/shared"
import { UserRound } from "lucide-react"
import { FC } from "react"

export const SearchBar: FC = () => {
	return (
		<header className="sticky top-0 bg-searchbar py-4 w-full">
			<div className="flex justify-between items-start gap-3 px-2">
				<SidebarTrigger />
				<div className="flex items-center gap-1.5">
					<Button variant="link">
						<small>User name</small>
						<UserRound />
					</Button>
					<ChangeTheme />
				</div>
			</div>
		</header>
	)
}

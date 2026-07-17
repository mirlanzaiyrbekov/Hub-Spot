import { Moon, Sun, UserRound } from "lucide-react"
import React from "react"
import { useTheme } from "../hooks/use-theme"
import { Button } from "./ui/button"
import { SidebarTrigger } from "./ui/sidebar"

export const SearchBar: React.FC = () => {
	const { setTheme, theme } = useTheme()
	return (
		<header className="sticky top-0 bg-searchbar py-4 w-full">
			<div className="flex justify-between items-start gap-3 px-2">
				<SidebarTrigger />
				<div className="flex items-center gap-1.5">
					<Button variant="link">
						<small>User name</small>
						<UserRound />
					</Button>
					<Button
						className="hidden"
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						variant="outline"
					>
						{theme === "dark" ? <Sun /> : <Moon />}
					</Button>
				</div>
			</div>
		</header>
	)
}

import { Moon, Sun, UserRound } from "lucide-react"
import React from "react"
import { useTheme } from "../hooks/use-theme"
import { MenuBar } from "./Menubar"
import { Button } from "./ui/button"

export const SearchBar: React.FC = () => {
	const { setTheme, theme } = useTheme()
	return (
		<header className="sticky top-0 bg-searchbar">
			<div
				className="flex flex-col-reverse items-start gap-3
				tablet:flex-row
			"
			>
				<div className="flex gap-2 items-center">
					<Button
						variant={"ghost"}
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					>
						{theme === "dark" ? <Sun /> : <Moon />}
					</Button>
					<MenuBar />
				</div>
				<div className="flex items-center gap-1.5">
					<span>Company name</span>
					<Button>
						<UserRound />
						<small>User name</small>
					</Button>
				</div>
			</div>
		</header>
	)
}

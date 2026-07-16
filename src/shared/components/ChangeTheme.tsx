import { Moon, Sun } from "lucide-react"
import { FC } from "react"
import { useTheme } from "../hooks/use-theme"
import { Button } from "./ui/button"

export const ChangeTheme: FC = () => {
	const { setTheme, theme } = useTheme()
	return (
		<Button
			className="hidden"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			variant="outline"
		>
			{theme === "dark" ? <Sun /> : <Moon />}
		</Button>
	)
}

import { Moon, Sun } from "lucide-react"
import { FC } from "react"
import { Button } from "../../../shared/ui/button"
import { useTheme } from "../use-theme"

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

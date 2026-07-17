import { useTheme } from "@/app/hooks"
import { Button } from "@/shared"
import { Moon, Sun } from "lucide-react"
import { FC } from "react"

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

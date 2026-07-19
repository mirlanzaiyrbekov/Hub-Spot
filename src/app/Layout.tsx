import { ThemeProvider } from "@/app/providers"
import { SidebarProvider } from "@/shared"
import { AppSidebar } from "@/widgets"
import { FC } from "react"
import { Outlet } from "react-router-dom"

export const Layout: FC = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<SidebarProvider>
				<AppSidebar />
				<main className="overflow-y-auto h-screen p-3 w-full">
					<Outlet />
				</main>
			</SidebarProvider>
		</ThemeProvider>
	)
}

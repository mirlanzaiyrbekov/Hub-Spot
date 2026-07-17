import { ThemeProvider } from "@/app/providers/theme-provider"
import { SidebarProvider } from "@/shared/ui/sidebar"
import { AppSidebar, SearchBar } from "@/widgets"
import React from "react"
import { Outlet } from "react-router-dom"

export const Layout: React.FC = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<SidebarProvider>
				<AppSidebar />
				<main className="overflow-y-auto border-red-600 h-screen w-full">
					<SearchBar />
					<Outlet />
					<section className="border border-red-300 h-screen"></section>
				</main>
			</SidebarProvider>
		</ThemeProvider>
	)
}

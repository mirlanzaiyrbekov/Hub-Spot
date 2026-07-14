import { ThemeProvider } from "@/app/providers/theme-provider"
import { SearchBar } from "@/shared/components"
import { SideBar } from "@/shared/components/SideBar"
import { SidebarProvider } from "@/shared/components/ui/sidebar"
import React from "react"
import { Outlet } from "react-router-dom"

export const Layout: React.FC = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<SidebarProvider>
				<div className="grid w-full min-h-screen grid-cols-[280px_minmax(0,1fr)]">
					<SideBar />
					<main className="overflow-y-auto border-red-600 h-screen">
						<SearchBar />
						<Outlet />
						<section className="border border-red-300 h-screen"></section>
					</main>
				</div>
			</SidebarProvider>
		</ThemeProvider>
	)
}

import { ThemeProvider } from "@/app/providers"
import { SidebarInset, SidebarProvider, TooltipProvider } from "@/shared"
import { AppBar, AppSidebar } from "@/widgets"
import { FC } from "react"
import { Outlet } from "react-router-dom"

export const Layout: FC = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<SidebarProvider>
				<TooltipProvider>
					<AppSidebar />
					<SidebarInset className="min-h-screen bg-sidebar p-2">
						<main className="rounded-lg shadow-sm border bg-background">
							<AppBar />
							<div className="p-3">
								<Outlet />
							</div>
						</main>
					</SidebarInset>
				</TooltipProvider>
			</SidebarProvider>
		</ThemeProvider>
	)
}

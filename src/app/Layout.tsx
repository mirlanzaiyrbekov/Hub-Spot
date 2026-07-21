import { ThemeProvider } from "@/app/providers"
import { ChangeTheme } from "@/features"
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
	TooltipProvider,
} from "@/shared"
import { AppSidebar, BreadcrumbComponent } from "@/widgets"
import { Menu } from "lucide-react"
import { FC } from "react"
import { Outlet } from "react-router-dom"

export const Layout: FC = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<SidebarProvider>
				<TooltipProvider>
					<AppSidebar />
					<SidebarInset>
						<div className="flex items-center gap-4 py-4 pl-3 shadow-xs sticky top-0 bg-background">
							<div className="flex items-center gap-0.5">
								<SidebarTrigger>
									<Menu />
								</SidebarTrigger>
								<ChangeTheme />
							</div>
							<BreadcrumbComponent />
						</div>
						<main className="overflow-y-auto h-screen p-3 w-full">
							<Outlet />
						</main>
					</SidebarInset>
				</TooltipProvider>
			</SidebarProvider>
		</ThemeProvider>
	)
}

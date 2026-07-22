import { ChangeTheme } from "@/features"
import { SidebarTrigger, useSidebar } from "@/shared"
import { BreadcrumbComponent } from "@/widgets/breadcrumb"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FC } from "react"

export const AppBar: FC = () => {
	const { open } = useSidebar()
	return (
		<div className="flex items-center gap-4 py-4 pl-3">
			<div className="flex items-center gap-0.5">
				<SidebarTrigger className="rounded-sm">
					{open ? <ChevronLeft /> : <ChevronRight />}
				</SidebarTrigger>
				<ChangeTheme />
			</div>
			<BreadcrumbComponent />
		</div>
	)
}

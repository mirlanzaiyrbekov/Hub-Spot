import { LucideIcon } from "lucide-react"

export type SidebarMenuType = {
	items: {
		title: string
		url: string
		icon?: LucideIcon
		isActive?: boolean
		subItems?: {
			title: string
			url: string
			disabled?: boolean
		}[]
	}[]
}

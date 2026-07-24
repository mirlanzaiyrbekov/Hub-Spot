"use client"

import { ChevronRight } from "lucide-react"

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/shared"
import { FC } from "react"
import { Link } from "react-router-dom"
import { SidebarMenuType } from "../types/sidebar-menu-component"

export const SidebarMenuComponent: FC<Pick<SidebarMenuType, "items">> = ({
	items,
}) => {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Платформа</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => (
					<Collapsible
						key={item.title}
						asChild
						defaultOpen={item.isActive}
						className="group/collapsible"
					>
						<SidebarMenuItem>
							<CollapsibleTrigger asChild>
								<SidebarMenuButton tooltip={item.title}>
									{item.icon && <item.icon />}
									<span>{item.title}</span>
									<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
								</SidebarMenuButton>
							</CollapsibleTrigger>
							<CollapsibleContent>
								<SidebarMenuSub>
									{item.subItems?.map((subItem) => (
										<SidebarMenuSubItem key={subItem.title}>
											{subItem.disabled ? (
												<SidebarMenuSubButton>
													<span className="cursor-not-allowed opacity-30">
														{subItem.title}
													</span>
												</SidebarMenuSubButton>
											) : (
												<SidebarMenuSubButton asChild>
													<Link to={subItem.url}>
														<span>{subItem.title}</span>
													</Link>
												</SidebarMenuSubButton>
											)}
										</SidebarMenuSubItem>
									))}
								</SidebarMenuSub>
							</CollapsibleContent>
						</SidebarMenuItem>
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	)
}

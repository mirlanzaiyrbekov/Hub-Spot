import {
	ChangeTheme,
	Separator,
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/shared"

import {
	Item,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/shared"
import { AudioLines, ChartArea, Phone, UsersRound } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

export const AppSidebar: React.FC = () => {
	return (
		<Sidebar collapsible="icon" className="border w-full sticky top-0">
			<SidebarHeader className="py-3 my-5">
				<span className="text-xs">Салон красоты ESTEL:</span>
				<ChangeTheme />
			</SidebarHeader>
			<SidebarContent className="p-6 gap-8 w-full ">
				<h4 className="flex items-center gap-2 text-xl font-bold">
					<AudioLines />
					Hub Spot
				</h4>
				<Separator className="opacity-50" />

				<SidebarMenu className="flex flex-col gap-2">
					<Link to="/">
						<Item variant="muted">
							<ItemMedia variant="icon">
								<UsersRound size={20} />
							</ItemMedia>
							<ItemContent>
								<ItemTitle>Сотрудники</ItemTitle>
								<ItemDescription>
									Список сотрудников, подробная информация
								</ItemDescription>
							</ItemContent>
						</Item>
					</Link>
					<Link to="#">
						<Item variant="muted">
							<ItemMedia variant="icon">
								<ChartArea size={20} />
							</ItemMedia>
							<ItemContent>
								<ItemTitle>Аналитика данных</ItemTitle>
								<ItemDescription>
									Подробная аналитика данных компании
								</ItemDescription>
							</ItemContent>
						</Item>
					</Link>
					<Link to="#">
						<Item variant="muted">
							<ItemMedia variant="icon">
								<Phone size={20} />
							</ItemMedia>
							<ItemContent>
								<ItemTitle>Тех.поддержка</ItemTitle>
								<ItemDescription>
									Техническая поддержка клиентов 24/7
								</ItemDescription>
							</ItemContent>
						</Item>
					</Link>
				</SidebarMenu>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenuItem>
					<SidebarMenuButton asChild>
						<a href="#">
							<span className="text-xs font-light text-textcolor">
								Разработано @ZionLabs 2026
							</span>
						</a>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarFooter>
		</Sidebar>
	)
}

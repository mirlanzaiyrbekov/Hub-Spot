import { ChangeTheme } from "@/features"
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
	Separator,
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/shared"

import { AudioLines, ChartArea, Phone, UsersRound } from "lucide-react"
import { FC } from "react"
import { Link } from "react-router-dom"

export const AppSidebar: FC = () => {
	return (
		<Sidebar collapsible="icon" className="border w-full sticky top-0">
			<SidebarHeader className="py-3 my-5">
				<h4 className="flex items-center gap-2 text-xl font-bold">
					<AudioLines />
					Hub Spot
				</h4>
			</SidebarHeader>
			<SidebarContent className="p-6 gap-8 w-full ">
				<div className="flex items-center gap-3.5">
					<ChangeTheme />
					<div className="flex flex-col">
						<span className="text-md">Салон красоты ESTEL:</span>
						<small className="text-textcolor">John Doe</small>
					</div>
				</div>
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

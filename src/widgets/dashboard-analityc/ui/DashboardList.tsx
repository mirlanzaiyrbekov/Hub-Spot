import { MoveDown, MoveUp, Star } from "lucide-react"

export const DashboardList = () => {
	return (
		<ul className="flex flex-col gap-2 flex-1 border border-dashed p-3">
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Администратор
				</span>
				<span className="whitespace-nowrap">John Doe</span>
			</li>
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Общая прибыль
				</span>
				<span className="flex items-center gap-0.5 whitespace-nowrap text-green-500">
					<MoveUp size={14} />
					3023.38KGS
				</span>
			</li>
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Расходы
				</span>
				<span className="flex items-center gap-0.5 whitespace-nowrap text-red-500">
					<MoveDown size={14} />
					1023.02KGS
				</span>
			</li>
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Лучший план
				</span>
				<span className="whitespace-nowrap">John Doe</span>
			</li>
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Худший план
				</span>
				<span className="whitespace-nowrap">John Doe</span>
			</li>
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Рейтинг (отзывы) 2GIS
				</span>
				<div className="flex items-center gap-0.5 whitespace-nowrap">
					<Star fill="var(--color-foreground)" size={18} />
					<Star fill="var(--color-foreground)" size={18} />
					<Star fill="var(--color-foreground)" size={18} />
					<Star size={18} />
					<Star size={18} />
				</div>
			</li>
		</ul>
	)
}

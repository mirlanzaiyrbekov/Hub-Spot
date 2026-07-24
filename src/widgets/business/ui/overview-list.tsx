import { ChevronsDown, ChevronsUp, MoveDown, MoveUp, Star } from "lucide-react"
import { FC } from "react"

export const OverviewList: FC = () => {
	return (
		<ul className="flex flex-col gap-2 flex-1 p-3">
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] text-muted-foreground flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Администратор
				</span>
				<span className="whitespace-nowrap">John Doe</span>
			</li>
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] text-muted-foreground flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Общая прибыль
				</span>
				<span className="flex items-center gap-0.5 whitespace-nowrap text-green-500">
					<ChevronsUp size={14} />
					3023.38KGS
				</span>
			</li>
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] text-muted-foreground flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Расходы
				</span>
				<span className="flex items-center gap-0.5 whitespace-nowrap text-red-500">
					<ChevronsDown size={14} />
					1023.02KGS
				</span>
			</li>
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] text-muted-foreground flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Лучший план
				</span>
				<span className="flex items-center gap-0.5 text-green-500 whitespace-nowrap">
					<MoveUp size={14} />
					17 John Doe
				</span>
			</li>
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] text-muted-foreground flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Худший план
				</span>
				<span className="flex items-center gap-0.5 text-red-500 whitespace-nowrap">
					<MoveDown size={14} />4 John Doe
				</span>
			</li>
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] text-muted-foreground flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Число сотрудников
				</span>
				<span className="flex items-center gap-0.5 whitespace-nowrap">18</span>
			</li>
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] text-muted-foreground flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Последняя оценка
				</span>
				<div className="flex items-center gap-0.5 whitespace-nowrap">
					<Star fill="var(--color-foreground)" size={16} />
					<Star fill="var(--color-foreground)" size={16} />
					<Star fill="var(--color-foreground)" size={16} />
					<Star fill="var(--color-foreground)" size={16} />
					<Star size={16} />
				</div>
			</li>
			<li className="flex justify-between items-center gap-2">
				<span className="text-[14px] text-muted-foreground flex-1 border-b border-dashed border-gray-300 dark:border-gray-600 pb-0.5">
					Рейтинг компании (отзывы) 2GIS
				</span>
				<div className="flex items-center gap-0.5 whitespace-nowrap">
					<small>4456</small>
					<Star fill="var(--color-foreground)" size={16} />
					<Star fill="var(--color-foreground)" size={16} />
					<Star fill="var(--color-foreground)" size={16} />
					<Star size={16} />
					<Star size={16} />
				</div>
			</li>
		</ul>
	)
}

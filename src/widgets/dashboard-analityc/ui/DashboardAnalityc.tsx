import { Calendar } from "@/shared"
import { DashboardList } from "@/widgets/dashboard-analityc/ui/DashboardList"
import { FC } from "react"

export const DashboardStats: FC = () => {
	return (
		<div className="border border-dashed p-2 min-h-64 h-full col-span-2">
			<h5 className="text-base font-medium my-5">Аналитика данных:</h5>
			<div className="flex justify-between items-center gap-3">
				<Calendar mode="range" className="border border-dashed" />
				<DashboardList />
			</div>
		</div>
	)
}

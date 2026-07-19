import { Button, Calendar } from "@/shared"
import { DashboardList } from "@/widgets/dashboard-analityc/ui/DashboardList"
import { DatabaseBackup } from "lucide-react"
import { FC } from "react"

export const DashbiardAnalityc: FC = () => {
	return (
		<div className="border border-dashed p-2 min-h-64 h-full col-span-2">
			<h5 className="text-base font-medium my-5">Аналитика данных:</h5>
			<div className="flex justify-between items-center gap-3">
				<div className="flex flex-col gap-1.5 border border-dashed p-3">
					<Calendar mode="range" className="p-0" />
					<Button
						className="p-6 rounded-lg flex items-center"
						variant="outline"
					>
						Обновить данные
						<DatabaseBackup className="mt-1" />
					</Button>
				</div>

				<DashboardList />
			</div>
		</div>
	)
}

import {
	Button,
	Calendar,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/shared"
import { DashboardList } from "@/widgets/dashboard-analityc/ui/DashboardList"
import { DatabaseBackup } from "lucide-react"
import { FC } from "react"

export const DashbiardAnalityc: FC = () => {
	return (
		<Card className="@container/card shadow-xs rounded-md">
			<CardHeader />
			<CardContent>
				<div className="border border-dashed rounded-sm p-2 min-h-64 h-full shadow-xs">
					<h5 className="text-base font-medium my-5">Аналитика данных:</h5>
					<div className="flex justify-between items-center gap-3">
						<div className="flex flex-col gap-1.5 border rounded-sm border-dashed p-3">
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
			</CardContent>
			<CardFooter />
		</Card>
	)
}

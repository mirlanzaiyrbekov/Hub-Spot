import { Button, Calendar, Card, CardContent, CardFooter } from "@/shared"
import { DatabaseBackup } from "lucide-react"
import { OverviewList } from "./overview-list"

export const BusinessOverview = () => {
	return (
		<Card className="@container/card shadow-xs rounded-md col-span-3">
			<CardContent>
				<h5 className="text-base font-medium my-2">Аналитика данных:</h5>
				<div className="flex justify-between items-center gap-3">
					<div className="flex flex-col gap-1.5 border rounded-sm p-3">
						<Calendar mode="range" className="p-0" />
						<Button className="p-5 rounded-md flex items-center">
							Обновить данные
							<DatabaseBackup className="mt-1" />
						</Button>
					</div>
					<OverviewList />
				</div>
			</CardContent>
			<CardFooter />
		</Card>
	)
}

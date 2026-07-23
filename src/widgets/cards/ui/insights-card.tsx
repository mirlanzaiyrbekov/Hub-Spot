import {
	Badge,
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared"
import { FC } from "react"

export const InsightsCard: FC = () => {
	return (
		<Card className="@container/card shadow-xs rounded-md">
			<CardHeader>
				<CardDescription>Требует внимания</CardDescription>
				<CardTitle className="text-2xl font-bold text-orange-500">3</CardTitle>
				<CardAction>
					<Badge variant="outline" className="text-orange-500">
						Важно
					</Badge>
				</CardAction>
			</CardHeader>
			<CardFooter className="flex-col items-start gap-1 text-sm">
				<div className="font-medium">2 записи не подтверждены</div>
				<div className="text-muted-foreground">
					1 клиент не посещал более 60 дней
				</div>
			</CardFooter>
		</Card>
	)
}

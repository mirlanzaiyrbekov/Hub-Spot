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

export const Entries: FC = () => {
	return (
		<Card className="@container/card shadow-xs rounded-md">
			<CardHeader>
				<CardDescription>Записи</CardDescription>
				<CardTitle className="text-2xl font-bold tabular-nums @[250px]/card:text-3xl">
					18
				</CardTitle>
				<CardAction>
					<Badge variant="outline" className="text-orange-500">
						2 отмены
					</Badge>
				</CardAction>
			</CardHeader>
			<CardFooter className="flex-col items-start gap-1 text-sm">
				<div className="font-medium">
					Сегодня: <span className="font-semibold">18</span>
				</div>
				<div className="text-muted-foreground">Завтра уже записано: 14</div>
			</CardFooter>
		</Card>
	)
}
